import React from "react";
import "./index.css";
import { DATA } from "../../constants";
import { AddIcon } from "../../components";
import { isToday } from "../../utils";

export const HomePage: React.FC = () => {
  const [data, setData] = React.useState(DATA);
  const handleAddExercise = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = event.currentTarget;
    const [dataIndexStr, workoutIndexStr] = value.split("-");
    const dataIndex = Number(dataIndexStr);
    const workoutIndex = Number(workoutIndexStr);
    const item = data[dataIndex];
    const workouts = item?.data;
    let exerciseItems = workouts[workoutIndex]?.items;
    if (exerciseItems?.length > 0) {
      setData((prev) => {
        const newData = [...prev];
        workouts[workoutIndex].items = [...exerciseItems, exerciseItems[0]];
        item.data = [...workouts];
        newData[dataIndex] = item;
        return newData;
      });
    }
  };
  return (
    <div className="container">
      <div className="grid col-span-7 gap-10">
        {DATA.map((i, idx) => (
          <div key={`day-${idx}`}>
            <p className="text-10 text-600">{i.day.shortName}</p>
            <div className="column-item">
              <p
                className={`m-0 text-11 leading-15 text-600 mb-10 ${
                  isToday(i.day.currentDate) ? "text-blue" : ""
                }`}
              >
                {i.day.currentDate.getDate()}
              </p>
              {i.data.map((workout, index) => (
                <div
                  className="column-item-content mb-5"
                  key={`workout-${index}-${idx}`}
                >
                  <h2 className="font-bold text-10 text-blue text-truncate text-uppercase">
                    {workout.name}
                  </h2>
                  {workout.items.map((exercise, exerciseIndex) => (
                    <div
                      className="card"
                      key={`exercise-${exerciseIndex}-${index}-${idx}`}
                    >
                      <div className="flex nowrap">
                        <div className="mt-auto text-10 w-27 leading-13">
                          {exercise.numberOfSets}
                        </div>
                        <div className="pl-10 text-truncate">
                          <h3 className="text-13 text-right text-truncate m-0 leading-18">
                            {exercise.name}
                          </h3>
                          <div>
                            <p className="text-truncate text-right text-grey m-0 leading-14">
                              {exercise.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="text-right">
                    <button
                      onClick={handleAddExercise}
                      value={`${idx}-${index}`}
                      className="appearance-unset button-unstyled"
                    >
                      <AddIcon />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
