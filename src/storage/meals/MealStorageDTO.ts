export type MealStorageDTO = {
  date: string;
  data: Array<{
    id: string;
    name: string;
    description: string;
    date: string;
    time: string;
    onDiet: boolean;
  }>
}

export type MealDTO = {
  id?: string;
  name: string;
  description: string;
  date: string;
  time: string;
  onDiet: boolean;
}