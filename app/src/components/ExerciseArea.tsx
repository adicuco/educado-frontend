//icons
import { TrashIcon } from "@heroicons/react/24/outline";
import { Exercise } from "../interfaces/Exercise";

export const ExerciseArea = ({ exercises }: { exercises: Array<unknown> }) => {
  let errors = { title: "some section", description: "bad error" };
  let mydata = {
    exercises: ["ex1", "ex2"],
    description: "my excellent course description",
    id: "1234",
  };

  console.log(exercises);

  return (
    <div className="flex flex-col space-y-4">
      {exercises.map((exercise, key) => {
        return (
          <div className="" key={key}>
            <div
              tabIndex={0}
              className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box rounded-lg py-2 px-4"
            >
              <div className="collapse-title text-xl font-medium">
                <p className="font-semibold">{"exercise " + (key + 1)}</p>
              </div>
              <div className="collapse-content">
                <form
                  onSubmit={() => {}}
                  className="flex flex-col space-y-6 divide"
                >
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      placeholder="Exercise title"
                      className="form-field focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      //{...register("title", { required: true })}
                    />
                    {errors.title && <span>This field is required</span>}
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label htmlFor="video">Video</label>
                    <input
                      type="text"
                      placeholder="video URL"
                      className="form-field focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      //{...register("video", { required: true })}
                    />
                    {errors.title && <span>This field is required</span>}
                  </div>
                  <div className="flex flex-col w-full flex-row">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="video">Answer 1</label>
                      <input
                        type="text"
                        placeholder="Answer 1 text"
                        className="form-field focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        //{...register("video", { required: true })}
                      />
                      {errors.title && <span>This field is required</span>}
                    </div>
                  </div>
                  <div className="flex flex-col w-full flex-row">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="video">Answer 2</label>
                      <input
                        type="text"
                        placeholder="Answer 2 text"
                        className="form-field focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        //{...register("video", { required: true })}
                      />
                      {errors.title && <span>This field is required</span>}
                    </div>
                  </div>
                  <div className="flex flex-col w-full flex-row">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="video">Answer 3</label>
                      <input
                        type="text"
                        placeholder="Answer 3 text"
                        className="form-field focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        //{...register("video", { required: true })}
                      />
                      {errors.title && <span>This field is required</span>}
                    </div>
                  </div>
                  <div className="flex flex-col w-full flex-row">
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="video">Answer 4</label>
                      <input
                        type="text"
                        placeholder="Answer 4 text"
                        className="form-field focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        //{...register("video", { required: true })}
                      />
                      {errors.title && <span>This field is required</span>}
                    </div>
                  </div>
                  <div className="flex flex-col w-full lg:flex-row">
                    <button>
                      <TrashIcon className="w-5 h-5" />
                    </button>
                    <button type="submit" className="std-button ml-auto">
                      Update Exercise
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
