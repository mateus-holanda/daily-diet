import { TouchableOpacityProps } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { CardTypeStyleProps, Container, Description, Icon, Number } from './styles';

interface StatsCardProps extends TouchableOpacityProps {
  main?: boolean;
  type: CardTypeStyleProps;
  number?: string;
  description: string;
  icon?: keyof typeof MaterialCommunityIcons.glyphMap;
}

export function StatsCard({ main = false, type, number, description, icon, ...rest }: StatsCardProps) {
  return (
    <Container type={type} main={main} {...rest}>
      { icon && <Icon name={icon} type={type} /> }

      <Number type={type} main={main}>
        {number}
      </Number>

      <Description>
        { main ? `das refeições ${description} da dieta` : description }
      </Description>
    </Container>
  );
}