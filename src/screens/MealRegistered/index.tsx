import { Bold, Container, Content, Subtitle, Title } from './styles';

import { Button } from '@components/Button';

import DietSuccess from '@assets/diet-success.svg';
import DietFail from '@assets/diet-fail.svg';
import { useState } from 'react';

export function MealRegistered() {
  const [type, setType] = useState<'SUCCESS' | 'FAIL'>('FAIL');

  return (
    <Container>
      { type === 'SUCCESS' ? (
          <Content>
            <Title type={type}>Continue assim!</Title>
            <Subtitle>
              Você continua <Bold>dentro da dieta</Bold>. Muito bem!
            </Subtitle>
            <DietSuccess />
          </Content>
        ) : (
          <Content>
            <Title type={type}>Que pena!</Title>
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

      <Button title="Ir para a página inicial" />
    </Container>
  );
}