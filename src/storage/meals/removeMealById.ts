import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";

import { getAllMeals } from "./getAllMeals";

export async function removeMealById(mealDeletedId: string, date: string) {
  try {
    const storedMeals = await getAllMeals();

    const [ mealsByDate ] = storedMeals?.filter(object => object?.date === date);

    const meals = mealsByDate?.data.filter(meal => meal.id !== mealDeletedId);

    if (meals?.length > 0) {
      const storage = JSON.stringify([
        ...storedMeals?.filter(object => object.date !== date),
        {
          date,
          data: meals
        }
      ]);
  
      await AsyncStorage.setItem(MEAL_COLLECTION, storage);
    } else {
      const storage = JSON.stringify([ ...storedMeals?.filter(object => object.date !== date) ]);

      await AsyncStorage.setItem(MEAL_COLLECTION, storage);
    }
    
  } catch (error) {
    throw error;
  }
}