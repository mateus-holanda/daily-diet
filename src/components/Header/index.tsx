import { useNavigation } from '@react-navigation/native';

import {
  Container,
  BackButton,
  BackIcon,
  HeaderTypeStyleProps,
  Title
} from './styles';

interface HeaderProps {
  title: string;
  type: HeaderTypeStyleProps;
}

export function Header({ title, type }: HeaderProps) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate('home');
  }

  return (
    <Container type={type}>
      <BackButton onPress={handleGoBack}>
        <BackIcon name="arrowleft" />
      </BackButton>

      <Title>{title}</Title>
    </Container>
  );
}