import { useState } from 'react';
import { Alert, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import RNDateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

import { AppError } from '@utils/AppError';

import { editMeal } from '@storage/meals/editMeal';

import { DietTypeButton } from '@components/DietTypeButton';
import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

import {
  ButtonContainer,
  Container,
  DatetimePickersContainer,
  DatetimePickerInput,
  DatetimePickerTitle,
  DietTypeButtons,
  DietTypeSelector,
  EditMealForm
} from './styles';

interface RouteParams {
  id: string;
  meal: string;
  description: string;
  date: string;
  time: string;
  onDiet: boolean;
}

export function EditMeal() {
  const navigation = useNavigation();

  const route = useRoute();
  const { id, meal, description, date, time, onDiet } = route.params as RouteParams;

  const [newMeal, setNewMeal] = useState(meal);
  const [newDescription, setNewDescription] = useState(description);
  const [newDate, setNewDate] = useState(date);
  const [newTime, setNewTime] = useState(time);
  const [newOnDiet, setNewOnDiet] = useState(onDiet);
  const [hasChanged, setHasChanged] = useState(false);

  const dateParts = date.split('/');
  const timeParts = time.split(':');
  const [currentDatetime, setCurrentDatetime] = useState(
    new Date(`20${dateParts[2]}-${dateParts[1]}-${dateParts[0]}T${timeParts[0]}:${timeParts[1]}:00.00-03:00`)
  );

  async function handleSaveChanges() {
    try {
      if (
        newMeal.trim() === meal && newDescription.trim() === description &&
        newDate === date && newTime === time && newOnDiet === onDiet
      ) {
        return Alert.alert('Editar refeição', 'Não foi detectada nenhuma alteração na refeição.');
      }
  
      if (newMeal.trim().length === 0 || newDescription.trim().length === 0) {
        return Alert.alert('Editar refeição', 'Por favor, preencha todos os campos antes de salvar as alterações.');
      }
  
      const editedMeal = {
        id,
        name: newMeal,
        description: newDescription,
        date: newDate,
        time: newTime,
        onDiet: newOnDiet
      }
  
      await editMeal(editedMeal);
      navigation.navigate('home');
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Editar refeição', error.message);
      } else {
        Alert.alert('Editar refeição', 'Ocorreu um erro ao tentar editar a refeição.');
      }
    }
  }

  return (
    <Container>
      <Header title="Editar refeição" type="NEUTRAL" />

      <EditMealForm>
        <Input
          title="Nome"
          returnKeyType="done"
          value={newMeal}
          onChangeText={(value) => {
            setNewMeal(value);
            setHasChanged(true);
          }}
        />

        <Input
          title="Descrição"
          value={newDescription}
          description
          multiline
          numberOfLines={1}
          returnKeyType="done"
          clearButtonMode="never"
          blurOnSubmit
          onChangeText={(value) => {
            setNewDescription(value);
            setHasChanged(true);
          }}
        />

        <DatetimePickersContainer>
          <DatetimePickerInput>
            <DatetimePickerTitle>Data</DatetimePickerTitle>
            <RNDateTimePicker
              testID="dateTimePicker"
              style={{ alignSelf: 'flex-start', width: '70%' }}
              value={currentDatetime}
              mode="date"
              locale="pt-BR"
              dateFormat="shortdate"
              accentColor="#1B1D1E"
              onChange={(e: DateTimePickerEvent) => {
                if (e.nativeEvent.timestamp) {
                  setCurrentDatetime(new Date(e.nativeEvent.timestamp));
                  setNewDate(Intl.DateTimeFormat('pt-BR', {
                    year: '2-digit',
                    month: '2-digit',
                    day: '2-digit'
                  }).format(e.nativeEvent.timestamp));
                }
              }}
            />
          </DatetimePickerInput>
          <DatetimePickerInput>
            <DatetimePickerTitle>Hora</DatetimePickerTitle>
            <RNDateTimePicker
              testID="dateTimePicker"
              style={{ alignSelf: 'flex-start', width: '40%' }}
              value={currentDatetime}
              mode="time"
              locale="pt-BR"
              accentColor="#1B1D1E"
              onChange={(e: DateTimePickerEvent) => {
                if (e.nativeEvent.timestamp) {
                  setCurrentDatetime(new Date(e.nativeEvent.timestamp));
                  setNewTime(Intl.DateTimeFormat('pt-BR', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false
                  }).format(e.nativeEvent.timestamp));
                }
              }}
            />
          </DatetimePickerInput>
        </DatetimePickersContainer>

        <DietTypeSelector>
          <Text>Está dentro da dieta?</Text>
          <DietTypeButtons>
            <DietTypeButton
              activeOpacity={1}
              onPress={() => {
                setNewOnDiet(true);
                setHasChanged(true);
              }}
              active={newOnDiet}
              type="POSITIVE"
            />
            <DietTypeButton
              activeOpacity={1}
              onPress={() => {
                setNewOnDiet(false);
                setHasChanged(true);
              }}
              active={!newOnDiet}
              type="NEGATIVE"
            />
          </DietTypeButtons>
        </DietTypeSelector>

        <ButtonContainer>
          <Button
            title="Salvar alterações"
            onPress={handleSaveChanges}
            disabled={!hasChanged}
          />
        </ButtonContainer>
      </EditMealForm>
    </Container>
  );
}