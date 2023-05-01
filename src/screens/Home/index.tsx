import { SectionList, Text, View } from 'react-native';
import { Container, NewMealContainer, SectionHeader } from './styles';

import { ProfileHeader } from '@components/ProfileHeader';
import { StatsCard } from '@components/StatsCard';
import { Button } from '@components/Button';
import { MealCard } from '@components/MealCard';
import { EmptyList } from '@components/EmptyList';

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
  return (
    <Container>
      <ProfileHeader />

      <StatsCard main type="POSITIVE" description="dentro" number="95,65%" />

      <NewMealContainer>
        <Text>Refeições</Text>
        <Button title="Nova refeição" icon="plus" />
      </NewMealContainer>

        <SectionList
          style={{ marginTop: 40 }}
          sections={data}
          keyExtractor={(item) => item.time + ' - ' + item.meal}
          renderItem={({item}) => (
            <MealCard
              time={item.time}
              meal={item.meal}
              type="POSITIVE"
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
        />
    </Container>
  );
}