import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";

// Icons
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline"

// components
import Layout from '../components/Layout'
import { CategoryPill as Pill } from "../components/CategoryPill";
import { SectionArea } from '../components/SectionArea';
import useSWR from 'swr';
import CourseServices from '../services/course.services';
import { useParams } from 'react-router-dom';

// Interface
type Inputs = {
    title: string,
    description: string,
};

const CourseEdit = () => {

    // Get path params
    const { id } = useParams();
    console.log(id);

    // Fetch data with useSWR
    const { data, error } = useSWR(
        `http://127.0.0.1:8888/api/course/${id}`,
        CourseServices.getCourseDetail
    )

    // React useForm setup
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    // Demo data
    const course = {
        id: "6335993db89fa3077a35ce82",
        title: "Basic Python",
        description: "Python - Learn math while you commute, develop the skills you need, conquer tomorrow's job market, begin your journey today",
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

    if (!data) { return <>Loading...</> }
    if (error) { return <>Error...</> }

    return (
        <Layout meta={`Course: ${data.title.slice(0,15)}`}>
            <div className="w-full">

                {/** Course details edit */}
                <div className='max-w-3xl mx-auto bg-white p-4 rounded-xl'>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-6 divide">

                        <div className="flex flex-col space-y-2">
                            <label>Update Cover Image</label>
                            <div className='p-1 rounded-xl border-gray-300 border h-[280px] overflow-hidden'>
                                <img src={course.cover_image} alt={data.title} className="w-full h-max rounded-lg object-none hover:object-cover" />
                            </div>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label htmlFor='title'>Title</label>
                            <input type="text" defaultValue={data.title}
                                className="form-field focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                {...register("title", { required: true })}
                            />
                            {errors.title && <span>This field is required</span>}
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label htmlFor='description'>Description</label>
                            <textarea rows={4} defaultValue={data.description} placeholder={data.description}
                                className="resize-none form-field focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                {...register("description", { required: true })}
                            />
                            {errors.description && <span>This field is required</span>}
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label htmlFor='categories'>Categories</label>
                            <div className='flex flex-row space-x-2'>
                                {course.categories.map((category: any, key: number) => <Pill category={category} key={key} />)}

                                {/** Add new pill */}
                                <span className="px-3 py-1 flex items-center text-base rounded-full border border-blue-500 hover:bg-blue-700 text-blue-500 shadow cursor-pointer">
                                    <span>Add</span>
                                    <button className="bg-transparent">
                                        <PlusIcon className='w-4 h-4 ml-2' />
                                    </button>
                                </span>
                            </div>
                        </div>

                        <button type="submit" className='std-button ml-auto'>Update Course</button>
                    </form>


                    <h1 className='text-xl font-medium mb-4'>Sections</h1>
                    <SectionArea sections={data.sections} />
                </div>
            </div>
        </Layout>
    )
}

export default CourseEdit