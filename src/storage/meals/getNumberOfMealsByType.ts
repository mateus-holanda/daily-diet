import AsyncStorage from '@react-native-async-storage/async-storage';

import { MealStorageDTO } from './MealStorageDTO';

import { MEAL_COLLECTION } from '@storage/storageConfig';

export async function getNumberOfMealsByType() {
  try {
    let mealsOnDiet = 0;
    let mealsOutOfDiet = 0;

    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
    const meals: MealStorageDTO[] = storage ? JSON.parse(storage) : [];

    meals.map((obj) => {
      obj.data.map(meal => {
        if(meal.onDiet) {
          mealsOnDiet += 1;
        } else {
          mealsOutOfDiet += 1;
        }
      })
    });

    return [mealsOnDiet, mealsOutOfDiet];
  } catch (error) {
    throw error;
  }
}