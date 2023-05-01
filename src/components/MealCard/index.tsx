import { TouchableOpacityProps } from 'react-native';

import {
  Container,
  Meal,
  MealCardTypeStyleProps,
  Time,
  TypeIndicator,
  VerticalBar
} from './styles';

interface MealCardProps extends TouchableOpacityProps {
  time: string;
  meal: string;
  type: MealCardTypeStyleProps;
}

export function MealCard({ time, meal, type, ...rest }: MealCardProps) {
  return (
    <Container type={type} {...rest}>
      <Time>{time}</Time>
      <VerticalBar />
      <Meal>{meal}</Meal>
      <TypeIndicator type={type} />
    </Container>
  );
}