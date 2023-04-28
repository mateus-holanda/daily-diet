import { Text } from 'react-native';
import { CardTypeStyleProps, Container, Description, Icon, Number } from './styles';

interface StatsCardProps {
  main?: boolean;
  type: CardTypeStyleProps;
  number: string;
  description: string;
}

export function StatsCard({ main = false, type, number, description }: StatsCardProps) {
  return (
    <Container type={type} main={main}>
      { main && <Icon name="arrow-top-right" type={type} /> }

      <Number type={type} main={main}>
        {number}
      </Number>

      <Description>
        { main ? `das refeições ${description} da dieta` : description }
      </Description>
    </Container>
  );
}