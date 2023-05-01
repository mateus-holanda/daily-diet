import { SectionList, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { ProfileHeader } from '@components/ProfileHeader';
import { StatsCard } from '@components/StatsCard';
import { Button } from '@components/Button';
import { MealCard } from '@components/MealCard';
import { EmptyList } from '@components/EmptyList';

import { Container, NewMealContainer, SectionHeader } from './styles';

const data = [
  {
    date: '18.08.23',
    data: [
      {
        "time": "15:00",
        "meal": "Pizza",
        "type": "NEGATIVE"
      },
      {
        "time": "21:00",
        "meal": "Salad",
        "type": "POSITIVE"
      },
      {
        "time": "23:00",
        "meal": "French Fries",
        "type": "NEGATIVE"
      },
    ],
  },
  {
    date: "17.08.23",
    data: [
      {
        "time": "15:00",
        "meal": "Pizza",
        "type": "NEGATIVE"
      },
      {
        "time": "21:00",
        "meal": "Salad",
        "type": "POSITIVE"
      },
      {
        "time": "23:00",
        "meal": "French Fries",
        "type": "NEGATIVE"
      },
    ],
  },
  {
    date: "16.08.23",
    data: [
      {
        "time": "15:00",
        "meal": "Pizza",
        "type": "NEGATIVE"
      },
      {
        "time": "21:00",
        "meal": "Salad",
        "type": "POSITIVE"
      },
      {
        "time": "23:00",
        "meal": "French Fries",
        "type": "NEGATIVE"
      },
    ],
  }
];

export function Home() {
  const navigation = useNavigation();
  
  function handleCreateNewMeal() {
    navigation.navigate('new');
  }

  return (
    <Container>
      <ProfileHeader />

      <StatsCard main type="POSITIVE" description="dentro" number="95,65%" />

      <NewMealContainer>
        <Text>Refeições</Text>
        <Button
          title="Nova refeição"
          icon="plus"
          onPress={handleCreateNewMeal}
        />
      </NewMealContainer>

        <SectionList
          style={{ marginTop: 40 }}
          sections={data}
          keyExtractor={(item) => item.time + ' - ' + item.meal}
          renderItem={({item, section }) => (
            <MealCard
              time={item.time}
              meal={item.meal}
              type="POSITIVE"
              onPress={() => navigation.navigate('info', {
                meal: item.meal,
                description: 'Descrição qualquer da comida',
                date: section.date,
                time: item.time,
                onDiet: true
              })}
            />
          )}
          renderSectionHeader={({section: {date}}) => (
            <SectionHeader>{date}</SectionHeader>
          )}
          //SectionSeparatorComponent={() => (
          //  <View style={{ height: 16 }} />
          //)}
          //ItemSeparatorComponent={() => (
          //  <View style={{ height: 8 }} />
          //)}
          //ListEmptyComponent={() => (
          //  <EmptyList />
          //)}
          stickySectionHeadersEnabled={false}
          showsVerticalScrollIndicator={false}
        />
    </Container>
  );
}