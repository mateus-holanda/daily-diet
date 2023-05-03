export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      stats: {
        percentage: number;
        bestStreakOnDiet: number;
        mealsRegistered: number;
        mealsOnDiet: number;
      };
      new: undefined;
      registered: {
        onDiet: boolean | undefined;
      },
      info: {
        id: string;
        meal: string;
        description: string;
        date: string;
        time: string;
        onDiet: boolean;
      },
      edit: {
        id: string;
        meal: string;
        description: string;
        date: string;
        time: string;
        onDiet: boolean;
      }
    }
  }
}