import { useState } from 'react';
import { Alert, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { AppError } from '@utils/AppError';

import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { DatetimePicker } from '@components/DatetimePicker';
import { DietTypeButton } from '@components/DietTypeButton';

import {
  Container,
  DatetimePickerContainer,
  DietTypeSelector,
  DietTypeButtons,
  NewMealForm,
  ButtonContainer
} from './styles';

export function NewMeal() {
  const [onDiet, setOnDiet] = useState<boolean | undefined>(undefined);

  const navigation = useNavigation();
  
  function handleRegisterNewMeal() {
    try {
      if (onDiet === undefined) {
        return Alert.alert('Nova refeição', "Por favor, informe se a refeição está dentro ou fora da dieta.");
      }

      navigation.navigate('registered', { onDiet });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova refeição', error.message);
      } else {
        Alert.alert('Nova refeição', 'Ocorreu um erro ao tentar criar uma nova refeição.');
      }
    }
  }

  return (
    <Container>
      <Header title="Nova refeição" type="NEUTRAL" />

      <NewMealForm>
        <Input
          title="Nome"
          returnKeyType="done"
        />

        <Input
          title="Descrição"
          description
          multiline
          numberOfLines={1}
          returnKeyType="done"
          clearButtonMode="never"
        />

        <DatetimePickerContainer>
          <DatetimePicker title="Data" mode="date" />
          <DatetimePicker title="Hora" mode="time" />
        </DatetimePickerContainer>

        <DietTypeSelector>
          <Text>Está dentro da dieta?</Text>
          <DietTypeButtons>
            <DietTypeButton
              activeOpacity={1}
              onPress={() => setOnDiet(true)}
              active={onDiet}
              type="POSITIVE"
            />
            <DietTypeButton
              activeOpacity={1}
              onPress={() => setOnDiet(false)}
              active={onDiet === false}
              type="NEGATIVE"
            />
          </DietTypeButtons>
        </DietTypeSelector>
        
        <ButtonContainer>
          <Button
            title="Cadastrar refeição"
            onPress={handleRegisterNewMeal}
          />
        </ButtonContainer>
      </NewMealForm>
    </Container>
  );
}