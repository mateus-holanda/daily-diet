import { useState } from 'react';
import { Alert, Modal } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { AppError } from '@utils/AppError';

import { removeMealById } from '@storage/meals/removeMealById';

import { Button } from '@components/Button';
import { Header } from '@components/Header';

import {
  ButtonsContainer,
  Container,
  Description,
  DietType,
  MealInfoContainer,
  ModalButtonsContainer,
  ModalContent,
  ModalTitle,
  Subtitle,
  Title,
  TypeIndicator
} from './styles';

interface RouteParams {
  id: string;
  meal: string;
  description: string;
  date: string;
  time: string;
  onDiet: boolean;
}

export function MealInfo() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const navigation = useNavigation();

  const route = useRoute();
  const { id, meal, description, date, time, onDiet } = route.params as RouteParams;

  function handleEditMeal() {
    setIsModalVisible(false);
    navigation.navigate('edit', {
      id,
      meal,
      description,
      date,
      time,
      onDiet,
    });
  }

  async function handleRemoveMeal(id: string, date: string) {
    try {
      await removeMealById(id, date);
      setIsModalVisible(false);

      navigation.navigate('home');
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova refeição', error.message);
      } else {
        Alert.alert('Excluir refeição', 'Houve um problema ao tentar excluir essa refeição.');
      }
    }
  }

  return (
    <Container modalOpen={isModalVisible}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
        >
          <ModalContent>
            <ModalTitle>
              Deseja realmente excluir {'\n '} o registro da refeição?
            </ModalTitle>

            <ModalButtonsContainer>
              <Button
                title="Cancelar"
                type="LIGHT"
                onPress={() => setIsModalVisible(false)}
              />
              <Button
                title="Sim, excluir"
                onPress={() => handleRemoveMeal(id, date)}
              />
            </ModalButtonsContainer>
          </ModalContent>
        </Modal>

      <Header title="Refeição" type={onDiet ? "POSITIVE" : "NEGATIVE"} />

      <MealInfoContainer>
        <Title>{meal}</Title>
        <Description>
          {description}
        </Description>
        <Subtitle>Data e hora</Subtitle>
        <Description>{date} às {time}</Description>

        <DietType>
          <TypeIndicator onDiet={onDiet} />
          <Subtitle>
            { onDiet ? 'dentro da dieta' : 'fora da dieta' }
          </Subtitle>
        </DietType>

        <ButtonsContainer>
          <Button
            title="Editar Refeição"
            icon="edit"
            onPress={handleEditMeal}
          />
          <Button
            title="Excluir Refeição"
            icon="delete"
            type="LIGHT"
            onPress={() => setIsModalVisible(true)}
          />
        </ButtonsContainer>
      </MealInfoContainer>
    </Container>
  );
}