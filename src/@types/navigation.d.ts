export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      new: undefined;
      registered: {
        onDiet: boolean | undefined;
      },
      info: {
        meal: string;
        description: string;
        date: string;
        time: string;
        onDiet: boolean;
      },
      edit: {
        meal: string;
        description: string;
        date: string;
        time: string;
        onDiet: boolean;
      }
    }
  }
}