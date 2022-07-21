import { addDays } from "../../utils/index";
import { Exercise, Workout } from "../../intefaces";

export const DAYS_OF_WEEK = [
  {
    day_of_week: 1,
  },
];

const EXERCISE_ITEM: Exercise = {
  name: "test exercise test exercise 1",
  description: "50 lb x 5, 60 lb x 5, 50 lb x 5, 60 lb x 5, 50 lb",
  numberOfSets: 3,
};
const WORKOUT_ITEM: Workout = {
  name: "Test workout Test workout 1",
  numberOfExercises: 3,
  items: [EXERCISE_ITEM, EXERCISE_ITEM],
};

export const DATA = [
  {
    day: {
      shortName: "MON",
      value: 1,
      currentDate: new Date(),
    },
    data: [],
  },
  {
    day: {
      shortName: "TUE",
      value: 2,
      currentDate: addDays(1),
    },
    data: [WORKOUT_ITEM, WORKOUT_ITEM],
  },
  {
    day: {
      shortName: "WED",
      value: 3,
      currentDate: addDays(2),
    },
    data: [WORKOUT_ITEM],
  },
  {
    day: {
      shortName: "THU",
      value: 4,
      currentDate: addDays(3),
    },
    data: [],
  },
  {
    day: {
      shortName: "FRI",
      value: 5,
      currentDate: addDays(4),
    },
    data: [],
  },
  {
    day: {
      shortName: "SAT",
      value: 6,
      currentDate: addDays(5),
    },
    data: [],
  },
  {
    day: {
      shortName: "SUN",
      value: 7,
      currentDate: addDays(6),
    },
    data: [],
  },
];
