import { Container, BackButton, BackIcon, HeaderTypeStyleProps, Title } from './styles';

interface HeaderProps {
  title: string;
  type: HeaderTypeStyleProps;
}

export function Header({ title, type }: HeaderProps) {
  return (
    <Container type={type}>
      <BackButton>
        <BackIcon name="arrowleft" />
      </BackButton>

      <Title>{title}</Title>
    </Container>
  );
}