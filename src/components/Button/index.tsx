import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { ButtonTypeStyleProps, Container, Icon, Title } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  type?: ButtonTypeStyleProps;
  icon?: keyof typeof MaterialIcons.glyphMap;
}

export function Button({ title, type = 'DARK', icon, ...rest }: ButtonProps) {
  return (
    <Container type={type} {...rest}>
      { icon && <Icon name={icon} type={type} /> }
      <Title type={type}>{title}</Title>
    </Container>
  );
}