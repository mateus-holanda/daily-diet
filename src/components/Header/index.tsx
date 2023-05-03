import { StatsCard } from '@components/StatsCard';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  BackButton,
  BackIcon,
  HeaderTypeStyleProps,
  Title
} from './styles';

interface HeaderProps {
  type: HeaderTypeStyleProps;
  title?: string;
  number?: string;
}

export function Header({ type, title, number }: HeaderProps) {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.navigate('home');
  }

  return (
    <Container title={title} type={type}>
      <BackButton onPress={handleGoBack}>
        <BackIcon type={type} name="arrowleft" />
      </BackButton>

      {
        title ? <Title>{title}</Title> : (
          <StatsCard
            main
            type={type}
            number={number}
            description="dentro"
            disabled
          />
        )
      }
    </Container>
  );
}