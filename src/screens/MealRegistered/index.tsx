import { useNavigation, useRoute } from '@react-navigation/native';

import { Button } from '@components/Button';

import DietSuccess from '@assets/diet-success.svg';
import DietFail from '@assets/diet-fail.svg';

import { Bold, Container, Content, Subtitle, Title } from './styles';

interface RouteParams {
  onDiet: boolean;
}

export function MealRegistered() {
  const navigation = useNavigation();

  const route = useRoute();
  const { onDiet } = route.params as RouteParams;

  return (
    <Container>
      { onDiet ? (
          <Content>
            <Title type="SUCCESS">Continue assim!</Title>
            <Subtitle>
              Você continua <Bold>dentro da dieta</Bold>. Muito bem!
            </Subtitle>
            <DietSuccess />
          </Content>
        ) : (
          <Content>
            <Title type="FAIL">Que pena!</Title>
            <Subtitle>
              Você <Bold>saiu da dieta</Bold>
              {
                ` dessa vez, mas continue
                se esforçando e não desista!`
              }
            </Subtitle>
            <DietFail />
          </Content>
        )
      }

      <Button
        title="Ir para a página inicial"
        onPress={() => navigation.navigate('home')}
      />
    </Container>
  );
}