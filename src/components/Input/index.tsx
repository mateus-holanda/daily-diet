import { Container, InputArea, Title } from './styles';

import { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  title: string;
  description?: boolean;
}

export function Input({ title, description = false, ...rest }: InputProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <InputArea description={description} {...rest} />
    </Container>
  );
}