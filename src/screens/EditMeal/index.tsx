import { useState } from 'react';
import { Text } from 'react-native';

import { DatetimePicker } from '@components/DatetimePicker';
import { DietTypeButton } from '@components/DietTypeButton';
import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

import {
  ButtonContainer,
  Container,
  DatetimePickerContainer,
  DietTypeButtons,
  DietTypeSelector,
  EditMealForm
} from './styles';

export function EditMeal() {
  const [activeDietType, setActiveDietType] = useState('onDiet');

  return (
    <Container>
      <Header title="Editar refeição" type="NEUTRAL" />

      <EditMealForm>
        <Input
          title="Nome"
          returnKeyType="done"
          value="Sanduíche"
        />

        <Input
          title="Descrição"
          value="Descrição qualquer da refeição"
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
          <Button title="Salvar alterações" />
        </ButtonContainer>
      </EditMealForm>
    </Container>
  );
}