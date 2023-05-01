import { useState } from 'react';
import { Text } from 'react-native';

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
  const [activeDietType, setActiveDietType] = useState('');

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
              onPress={() => setActiveDietType('onDiet')}
              active={activeDietType === 'onDiet'}
              type="POSITIVE"
            />
            <DietTypeButton
              activeOpacity={1}
              onPress={() => setActiveDietType('outOfDiet')}
              active={activeDietType === 'outOfDiet'}
              type="NEGATIVE"
            />
          </DietTypeButtons>
        </DietTypeSelector>
        
        <ButtonContainer>
          <Button title="Cadastrar refeição" />
        </ButtonContainer>
      </NewMealForm>
    </Container>
  );
}