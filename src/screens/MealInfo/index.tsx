import { useState } from 'react';
import { Modal } from 'react-native';

import { Button } from '@components/Button';
import { Header } from '@components/Header';
//import { Modal } from '@components/Modal';

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

export function MealInfo() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const type = 'POSITIVE';

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
                onPress={() => setIsModalVisible(false)}
              />
            </ModalButtonsContainer>
          </ModalContent>
        </Modal>

      <Header title="Refeição" type={type} />

      <MealInfoContainer>
        <Title>Sanduíche</Title>
        <Description>
          Sanduíche de pão integral com atum e salada de alface e tomate
        </Description>
        <Subtitle>Data e hora</Subtitle>
        <Description>12/04/2023 às 17:00</Description>

        <DietType>
          <TypeIndicator type={type} />
          <Subtitle>
            { type === 'POSITIVE' ? 'dentro da dieta' : 'fora da dieta' }
          </Subtitle>
        </DietType>

        <ButtonsContainer>
          <Button title="Editar Refeição" icon="edit" />
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