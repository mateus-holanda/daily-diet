import { ActivityIndicator, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';

import theme from '@theme/index';

import { Home } from '@screens/Home/index';
import { NewMeal } from '@screens/NewMeal/index';
import { MealRegistered } from '@screens/MealRegistered/index';
import { MealInfo } from '@screens/MealInfo/index';
import { EditMeal } from '@screens/EditMeal/index';

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      { fontsLoaded ? <MealInfo /> : <ActivityIndicator /> }
    </ThemeProvider>
  );
}