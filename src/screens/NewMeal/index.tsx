import { useState } from 'react';
import { Alert, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RNDateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

import { AppError } from '@utils/AppError';
import { createMeal } from '@storage/meals/createMeal';

import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { DietTypeButton } from '@components/DietTypeButton';

import {
  ButtonContainer,
  Container,
  DatetimePickersContainer,
  DatetimePickerInput,
  DatetimePickerTitle,
  DietTypeSelector,
  DietTypeButtons,
  NewMealForm
} from './styles';

export function NewMeal() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [onDiet, setOnDiet] = useState<boolean | undefined>(undefined);

  const [currentDatetime, setCurrentDatetime] = useState(new Date());
  const [date, setDate] = useState(currentDatetime.toLocaleDateString(
    'pt-BR', { 
      year: '2-digit',
      month: '2-digit',
      day: '2-digit'
    }
  ));
  const [time, setTime] = useState(currentDatetime.toLocaleTimeString(
    'pt-BR', {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
    }
  ));

  const navigation = useNavigation();
  
  async function handleRegisterNewMeal() {
    try {
      if (name.trim().length === 0 || description.trim().length === 0) {
        return Alert.alert('Nova refeição', "Por favor, preencha todos os campos com as informações de sua refeição.");
      } else if (onDiet === undefined) {
        return Alert.alert('Nova refeição', "Por favor, informe se a refeição está dentro ou fora da dieta.");
      }

      const meal = {
        name,
        description,
        date,
        time,
        onDiet
      }

      await createMeal(meal);
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
          onChangeText={setName}
        />

        <Input
          title="Descrição"
          description
          multiline
          numberOfLines={1}
          returnKeyType="done"
          clearButtonMode="never"
          blurOnSubmit
          onChangeText={setDescription}
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
                setDate(Intl.DateTimeFormat('pt-BR', {
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
                setTime(Intl.DateTimeFormat('pt-BR', {
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