import { useState } from 'react';
import RNDateTimePicker from '@react-native-community/datetimepicker';

import { Container, Title } from './styles';

interface DateTimePickerProps {
  title: string;
  mode: 'date' | 'time';
}

export function DatetimePicker({ title, mode }: DateTimePickerProps) {
  const currentDatetime = new Date();

  const [date, setDate] = useState(currentDatetime.toLocaleDateString(
    'pt-BR', { 
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }
  ));
  const [time, setTime] = useState(currentDatetime.toLocaleTimeString(
    'pt-BR', {
      hour12: false
    }
  ));
  
  return (
    <Container>
      <Title>{title}</Title>
      { mode === 'date' ? (
        <RNDateTimePicker
          testID="dateTimePicker"
          style={{ alignSelf: 'flex-start', width: '70%' }}
          value={currentDatetime}
          mode="date"
          locale="pt-BR"
          dateFormat="shortdate"
          accentColor="#1B1D1E"
          onChange={(e) => {
            setDate(Intl.DateTimeFormat('pt-BR', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit'
            }).format(e.nativeEvent.timestamp));
          }}
        />) : (
          <RNDateTimePicker
            testID="dateTimePicker"
            style={{ alignSelf: 'flex-start', width: '40%' }}
            value={currentDatetime}
            mode="time"
            locale="pt-BR"
            accentColor="#1B1D1E"
            onChange={(e) => {
              setTime(Intl.DateTimeFormat('pt-BR', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
              }).format(e.nativeEvent.timestamp));
            }}
          />
        )
      }
    </Container>
  );
}