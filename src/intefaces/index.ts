export interface Exercise {
  name: string;
  description: string;
  numberOfSets: number;
}

export interface Workout {
  name: string;
  numberOfExercises: number;
  items: Exercise[];
}
