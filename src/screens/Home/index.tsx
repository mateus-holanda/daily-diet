import { Text } from "react-native";
import { Container, NewMealContainer } from "./styles";

import { ProfileHeader } from "@components/ProfileHeader";
import { StatsCard } from "@components/StatsCard";
import { Button } from "@components/Button";
import { MealCard } from "@components/MealCard";

export function Home() {
  return (
    <Container>
      <ProfileHeader />

      <StatsCard main type="POSITIVE" description="dentro" number="95,65%" />

      <NewMealContainer>
        <Text>Refeições</Text>

        <Button title="Nova refeição" icon="add" />
      </NewMealContainer>

      <MealCard time="20:00" meal="Salada" type="POSITIVE" />
      <MealCard time="23:00" meal="X-tudo" type="NEGATIVE" />
    </Container>
  );
}