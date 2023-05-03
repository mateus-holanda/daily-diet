import { useRoute } from '@react-navigation/native';

import { Header } from '@components/Header';
import { StatsCard } from '@components/StatsCard';

import { Container, MealTypeStats, StatsInfoContainer, StatsTitle } from './styles';

interface RouteParams {
  percentage: number;
  bestStreakOnDiet: number;
  mealsRegistered: number;
  mealsOnDiet: number;
}

export function Stats() {
  const route = useRoute();
  const { percentage, bestStreakOnDiet, mealsRegistered, mealsOnDiet } = route.params as RouteParams;
  
  return (
    <Container>
      <Header
        number={`${percentage}%`}
        type={percentage > 75 ? "POSITIVE" : "NEGATIVE"}
      />

      <StatsInfoContainer>
        <StatsTitle>Estatísticas gerais</StatsTitle>

        <StatsCard
          type="NEUTRAL"
          number={`${bestStreakOnDiet}`}
          description="melhor sequência de pratos dentro da dieta"
          disabled
        />
        <StatsCard
          type="NEUTRAL"
          number={`${mealsRegistered}`}
          description="refeições registradas"
          disabled
        />

        <MealTypeStats>
          <StatsCard
            type="POSITIVE"
            number={`${mealsOnDiet}`}
            description="refeições dentro da dieta"
            disabled
          />
          <StatsCard
            type="NEGATIVE"
            number={`${mealsRegistered - mealsOnDiet}`}
            description="refeições fora da dieta"
            disabled
          />
        </MealTypeStats>
      </StatsInfoContainer>
    </Container>
  );
}