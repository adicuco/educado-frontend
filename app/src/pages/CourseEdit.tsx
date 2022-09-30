import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";

// Icons
import { TrashIcon, XMarkIcon } from "@heroicons/react/24/outline"

// components
import Layout from '../components/Layout'

// Interface
type Inputs = {
    title: string,
    description: string,
};

const CourseEdit = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
    console.log(watch("title")); // watch input value by passing the name of it


    // Demo data
    const course = {
        id: "6335993db89fa3077a35ce82",
        title: "Basic JavaScript",
        description: "Javascript - Learn math while you commute, develop the skills you need, conquer tomorrow's job market, begin your journey today",
        cover_image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
        created_at: "26 sept 2022",
        categories: ["Programming", "IT"],
        creator: {
            name: "Frederik Bode",
            image: "https://www.tailwind-kit.com/images/person/7.jpg",
            institution: "AAU"
        },
        sections: [
            { name: "variables" },
            { name: "input and output" },
            { name: "functions" },
            { name: "classes" }
        ]
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

                {/** Course details edit */}
                <div className='max-w-3xl mx-auto bg-white p-4 rounded-xl'>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 divide">

                        <label>
                            <div className='p-1 rounded-xl border-gray-300 border h-[280px] overflow-hidden'>
                                <img src={course.cover_image} alt={course.title} className="w-full h-max  rounded-lg object-none hover:object-cover" />
                            </div>
                        </label>

                        <label htmlFor='title'>
                            Title
                            <input type="text" defaultValue={course.title}
                                className="form-field focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                {...register("title", { required: true })}
                            />
                            {errors.title && <span>This field is required</span>}
                        </label>

                        <label htmlFor='description'>
                            Description
                            <textarea rows={4} defaultValue={course.description} placeholder={course.description}
                                className="resize-none form-field focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                {...register("description", { required: true })}
                            />
                            {errors.description && <span>This field is required</span>}
                        </label>

                        <label htmlFor='categories'>
                            Categories
                            <div className='flex flex-row space-x-2'>
                                {course.categories.map((category, key) => {
                                    return (
                                        <span className="px-3 py-1 flex items-center text-base rounded-full text-blue-500 border border-blue-500 undefined ">
                                            {category}
                                            <button className="bg-transparent hover">
                                                <XMarkIcon className='w-3 h-3 ml-2'/>
                                            </button>
                                        </span>
                                    )
                                })}
                            </div>
                        </label>

                        <input type="submit" />
                    </form>


                    <h1>Sections</h1>
                    <div className='flex flex-col space-y-4'>

                        {course.sections.map((section, key) => {
                            return <div className='flex flex-row justify-between border rounded-lg py-2 px-4 cursor-pointer' key={key}>
                                <p className='font-semibold'>{section.name}</p>
                                <button><TrashIcon className='w-5 h-5' /></button>
                            </div>
                        })}

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CourseEdit