import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";

// Services
import CourseServices, { CourseInterface } from '../../services/course.services';

type Inputs = {
  title: string,
  description: string,
};

export const CourseCreateModal = ({ toggler }: { toggler: Function }) => {
  // use-form setup
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  // success on submit handler
  const onSubmit: SubmitHandler<Inputs> = data => {
    CourseServices.createCourse({
      title: data.title,
      description: data.description,
      category: [],
      published: false
    });
    toggler(); // Close modal after successfull submit
  };

  // failure on submit handler
  const onError: SubmitHandler<Inputs> = error => console.log(error);

  return (
    <div className='absolute top-0 left-0 w-screen h-screen bg-black/60'>
      <div className='absolute w-1/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-100'>
        <div className="shadow-lg w-full rounded-md p-4 bg-white border m-auto">
          <div className="w-full h-full text-center">
            <form className="flex h-full flex-col justify-between space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <h3 className="text-gray-800  text-xl font-bold mt-4">
                Create new course
              </h3>
              <div className="flex flex-col space-y-2 text-left">
                <label htmlFor='title'>Title</label>
                <input type="text" defaultValue={""}
                  className="form-field focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  {...register("title", { required: true })}
                />
                {errors.title && <span>This field is required</span>}
              </div>

              <div className="flex flex-col space-y-2 text-left">
                <label htmlFor='description'>Description</label>
                <textarea rows={4} defaultValue={""}
                  className="resize-none form-field focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  {...register("description")}
                />
              </div>

              <div className="flex items-center justify-between gap-4 w-full mt-8">
                <button type="submit" className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Create
                </button>
                <button onClick={() => { toggler() }} type="button" className="py-2 px-4  bg-white hover:bg-gray-100 border border-blue-500 focus:ring-blue-500 focus:ring-offset-blue-200 text-blue-500 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
