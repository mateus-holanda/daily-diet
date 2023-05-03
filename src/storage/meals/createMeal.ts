import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEAL_COLLECTION } from '@storage/storageConfig';

import { MealDTO } from './MealStorageDTO';
import { getAllMeals } from './getAllMeals';

export async function createMeal(newMeal: MealDTO) {
  try {
    const storedMeals = await getAllMeals();

    const [ mealsByDate ] = storedMeals?.filter(object => object?.date === newMeal.date);

    const newMealWithId = {
      id: uuid.v1(),
      name: newMeal.name,
      description: newMeal.description,
      date: newMeal.date,
      time: newMeal.time,
      onDiet: newMeal.onDiet,
    };

    if (mealsByDate) {
      const storage = JSON.stringify([
        ...storedMeals?.filter(object => object.date !== newMeal.date),
        {
          date: newMeal.date,
          data: [ ...mealsByDate.data, newMealWithId ]
        }
      ]);

      await AsyncStorage.setItem(MEAL_COLLECTION, storage);
    } else {
      const storage = JSON.stringify([
        ...storedMeals?.filter(object => object.date !== newMeal.date),
        {
          date: newMeal.date,
          data: [ newMealWithId ]
        }
      ]);

      await AsyncStorage.setItem(MEAL_COLLECTION, storage);
    }
  } catch (error) {
    throw error;
  }
};