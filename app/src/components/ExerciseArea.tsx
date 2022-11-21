import { Exercise } from "../interfaces/Exercise";
import ExerciseDetail from "../pages/ExerciseDetail";

export const ExerciseArea = ({ exercises }: { exercises: Array<Exercise> }) => {
  let errors = { title: "some section", description: "bad error" };
  
  return (
    <div className="flex-start flex-col space-y-4">
      {exercises.map((exercise, key) => {
        return (
          <div className="collapse flex-inherit" key={key}>

            <input type="checkbox" className="peer w-full" />
            <div className="collapse-title flex-start bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <p className="font-semibold">{exercise.title + " #" + (key + 1)}</p>
            </div>
            <div className="collapse-content">
              <ExerciseDetail />
            </div>

          </div>
        );
      })}
    </div>
  );
};
