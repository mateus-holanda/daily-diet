import { Text, TouchableOpacityProps } from 'react-native';

import { Container, Content, DietTypeButtonStyleProps, TypeIndicator } from './styles';

interface DietTypeButtonProps extends TouchableOpacityProps {
  type: DietTypeButtonStyleProps;
  active?: boolean;
}

export function DietTypeButton({ type, active = false, ...rest }: DietTypeButtonProps) {
  return (
    <Container type={type} active={active} {...rest}>
      <Content>
        <TypeIndicator type={type} />
        <Text>
          { type === 'POSITIVE' ? 'Sim' : 'Não' }
        </Text>
      </Content>
    </Container>
  )
}