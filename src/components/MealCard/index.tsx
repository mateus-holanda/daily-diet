import { Container, Meal, MealCardTypeStyleProps, Time, TypeIndicator, VerticalBar } from "./styles";

interface MealCardProps {
  time: string;
  meal: string;
  type: MealCardTypeStyleProps;
}

export function MealCard({ time, meal, type }: MealCardProps) {
  return (
    <Container type={type}>
      <Time>{time}</Time>
      <VerticalBar />
      <Meal>{meal}</Meal>
      <TypeIndicator type={type} />
    </Container>
  );
}