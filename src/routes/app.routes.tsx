import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '@screens/Home';
import { Stats } from '@screens/Stats';
import { NewMeal } from '@screens/NewMeal';
import { MealInfo } from '@screens/MealInfo';
import { EditMeal } from '@screens/EditMeal';
import { MealRegistered } from '@screens/MealRegistered';


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false, animation: "fade_from_bottom" }}>
      <Screen name="home" component={Home} />
      <Screen name="stats" component={Stats} />
      <Screen name="new" component={NewMeal} />
      <Screen name="info" component={MealInfo} />
      <Screen name="edit" component={EditMeal} />
      <Screen name="registered" component={MealRegistered} />
    </Navigator>
  );
}