import { useCallback, useState } from 'react';
import { Alert, SectionList, Text, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { getAllMeals } from '@storage/meals/getAllMeals';
import { MealStorageDTO } from '@storage/meals/MealStorageDTO';
import { getNumberOfMealsByType } from '@storage/meals/getNumberOfMealsByType';

import { Loading } from '@components/Loading';
import { ProfileHeader } from '@components/ProfileHeader';
import { StatsCard } from '@components/StatsCard';
import { Button } from '@components/Button';
import { MealCard } from '@components/MealCard';
import { EmptyList } from '@components/EmptyList';

import { Container, NewMealContainer, SectionHeader } from './styles';

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState<MealStorageDTO[]>([]);

  const [dietPercentage, setDietPercentage] = useState(0.0);
  const [bestStreakOnDiet, setBestStreakOnDiet] = useState(0);
  const [numberOfMealsOnDiet, setNumberOfMealsOnDiet] = useState(0);
  const [numberOfMealsOutOfDiet, setNumberOfMealsOutOfDiet] = useState(0);

  const navigation = useNavigation();

  async function fetchMealsAndCalculations() {
    try {
      setIsLoading(true);

      const data = await getAllMeals();
      const [mealsOnDiet, mealsOutOfDiet] = await getNumberOfMealsByType();

      setMeals(data);
      setBestStreakOnDiet(mealsOnDiet);
      setNumberOfMealsOnDiet(mealsOnDiet);
      setNumberOfMealsOutOfDiet(mealsOutOfDiet);

      const percentage = Number((mealsOnDiet / (mealsOutOfDiet + mealsOnDiet) * 100).toFixed(2));

      setDietPercentage(percentage);
    } catch (error) {
      Alert.alert('Refeições', 'Ocorreu um problema ao carregar as refeições.');
    } finally {
      setIsLoading(false);
    }
  }

  function handleCreateNewMeal() {
    navigation.navigate('new');
  }

  useFocusEffect(useCallback(() => {
    fetchMealsAndCalculations();
  }, []));

  return (
    <Container>
      <ProfileHeader />

      <StatsCard
        main
        type={dietPercentage > 75 ? "POSITIVE" : "NEGATIVE"}
        description="dentro"
        number={`${dietPercentage}%`}
        icon="arrow-top-right"
        onPress={() => navigation.navigate('stats', {
          percentage: dietPercentage,
          bestStreakOnDiet,
          mealsRegistered: numberOfMealsOnDiet + numberOfMealsOutOfDiet,
          mealsOnDiet: numberOfMealsOnDiet
        })}
      />

      <NewMealContainer>
        <Text>Refeições</Text>
        <Button
          title="Nova refeição"
          icon="plus"
          onPress={handleCreateNewMeal}
        />
      </NewMealContainer>

      {
        isLoading ? <Loading /> : (
          <SectionList
            style={{ marginTop: 40 }}
            sections={meals}
            keyExtractor={(item) => item.id}
            renderItem={({item }) => (
              <MealCard
                time={item.time}
                meal={item.name}
                onDiet={item.onDiet}
                onPress={() => navigation.navigate('info', {
                    id: item.id,
                    meal: item.name,
                    description: item.description,
                    date: item.date,
                    time: item.time,
                    onDiet: item.onDiet
                  }
                )}
              />
            )}
            renderSectionHeader={({section: {date}}) => (
              <SectionHeader>{date}</SectionHeader>
            )}
            SectionSeparatorComponent={() => (
              <View style={{ height: 16 }} />
            )}
            ItemSeparatorComponent={() => (
              <View style={{ height: 8 }} />
            )}
            ListEmptyComponent={() => (
              <EmptyList />
            )}
            stickySectionHeadersEnabled={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
              { paddingBottom: 50 },
              meals.length === 0 && { flex: 1 }
            ]}
          />
        )
      }
    </Container>
  );
}