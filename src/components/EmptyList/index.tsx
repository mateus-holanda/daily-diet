import ClipboardIcon from '../../assets/clipboard.svg';

import { Container, Subtitle, Title } from './styles';

export function EmptyList() {
  return (
    <Container>
      <ClipboardIcon />
      <Title>
        Você ainda não possui refeições registradas
      </Title>
      <Subtitle>
        Adicione e organize suas refeições
      </Subtitle>
    </Container>
  );
}