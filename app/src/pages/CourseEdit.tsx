import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";

// components
import Layout from '../components/Layout'

type Inputs = {
    title: string,
    description: string,
};

const CourseEdit = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  console.log(watch("title")); // watch input value by passing the name of it

  const course = {
    id: "6335993db89fa3077a35ce82",
    title: "Basic JavaScript",
    description: "Javascript - Learn math while you commute, develop the skills you need, conquer tomorrow's job market, begin your journey today",
    cover_image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
    created_at: "26 sept 2022",
    creator: {
      name: "Frederik Bode",
      image: "https://www.tailwind-kit.com/images/person/7.jpg",
      institution: "AAU"
    }
  }

  return (
      <Layout>
          <div className="w-full">
              {/** Page Descriptor */}
              <div className="header flex items-end justify-between mb-12">
                  <div className="title">
                      <p className="text-4xl font-bold text-gray-800 mb-4">
                          Editting <span className='text-blue-500'>{course.title}</span>
                      </p>
                      <p className="text-2xl font-light text-gray-500">
                          All courses are verified by 2 experts and valdiate by an Educado Admin
                      </p>
                  </div>
              </div>

              <h1>Any place in your app!</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                  <input defaultValue="test" {...register("title")} />
                  <input defaultValue="" {...register("description", { required: true })} />
                  {errors.title && <span>This field is required</span>}
                  <input type="submit" />
              </form>
          </div>
      </Layout>
  )
}

export default CourseEdit