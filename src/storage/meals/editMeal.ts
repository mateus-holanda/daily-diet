import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEAL_COLLECTION } from '@storage/storageConfig';

import { MealDTO } from './MealStorageDTO';
import { getAllMeals } from './getAllMeals';

export async function editMeal(editedMeal: MealDTO) {
  try {
    const storedMeals = await getAllMeals();

    const [ mealsByDate ] = storedMeals?.filter(object => object?.date === editedMeal.date);

    const storage = JSON.stringify([
      ...storedMeals?.filter(object => object.date !== editedMeal.date),
      {
        date: editedMeal.date,
        data: [
          ...mealsByDate?.data.filter(object => object?.id !== editedMeal.id),
          editedMeal
        ]
      }
    ]);

    await AsyncStorage.setItem(MEAL_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
};