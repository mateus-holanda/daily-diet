import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Meal,
  Time,
  TypeIndicator,
  VerticalBar
} from './styles';

interface MealCardProps extends TouchableOpacityProps {
  time: string;
  meal: string;
  onDiet: boolean;
}

export function MealCard({ time, meal, onDiet, ...rest }: MealCardProps) {
  return (
    <Container onDiet={onDiet} {...rest}>
      <Time>{time}</Time>
      <VerticalBar />
      <Meal>{meal}</Meal>
      <TypeIndicator onDiet={onDiet} />
    </Container>
  );
}