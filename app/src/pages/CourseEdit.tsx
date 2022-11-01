import React, { useState } from 'react'
import useSWR from 'swr';
import { toast } from 'react-toastify';
import { Link, useParams } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";

// Icons
import { ArrowLeftIcon, DevicePhoneMobileIcon, PhoneIcon, PhotoIcon, PlusIcon } from "@heroicons/react/24/outline"

// components
import Layout from '../components/Layout'
import { CategoryPill as Pill } from "../components/CategoryPill";
import { SectionList } from '../components/dnd/SectionList';

// Services
import CourseServices from '../services/course.services';
import IphoneView from '../components/mockup/IphoneView';


// Interface
type Inputs = {
    title: string,
    description: string,
};

const CourseEdit = () => {
    // Get path params
    const { id } = useParams();
    const [phoneView, setPhoneView] = useState(false);

    // Fetch data with useSWR
    const { data, error } = useSWR(
        `http://127.0.0.1:8888/api/courses/${id}`,
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
        <Layout meta={`Course: ${data.title.slice(0, 15)}`}>

            {/** Course navigation */}
            <div className="navbar bg-base-100">
                <div className='flex-1'>
                    <Link to="/courses" className="btn btn-square btn-ghost normal-case text-xl"><ArrowLeftIcon width={24} /></Link>
                    <a className="normal-case text-xl ml-4">{data.title}</a>
                </div>
                <div className="flex-none space-x-2">
                    <button onClick={() => toast.success("Course published")} className='btn btn-sm bg-blue-500 text-white border-0'>Unpublish</button>
                    <button type="submit" className='btn btn-sm bg-blue-700 text-white border-0'>Update Course</button>
                    <button
                        onClick={() => setPhoneView(!phoneView)}
                        className='btn btn-ghost'
                    ><DevicePhoneMobileIcon width={24} />
                    </button>
                </div>
            </div>

            {/** Course details edit */}
            <div className="w-full container flex flex-row space-x-4 p-6">
                <div className='mx-auto max-w-5xl bg-white rounded-xl p-6'>
                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-1 gap-6">
                        <div className='flex flex-col space-y-6 divide'>
                            <h1 className='text-xl font-medium'>Course Content</h1>

                            <div className="flex flex-col space-y-2">
                                <label htmlFor='dover_image'>Header</label>
                                <div className='relative'>
                                    <div className='p-1 rounded-xl border-gray-300 border h-[240px] overflow-hidden'>
                                        <img src={course.cover_image} alt={data.title} className="w-full h-max rounded-lg object-cover" />
                                    </div>
                                    <button className='btn btn-sm bg-gray-400 hover:bg-gray-500 border-0 gap-2 rounded-full absolute bottom-2 right-2'>
                                        <PhotoIcon width={20} />
                                        change
                                    </button>
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

                            {/** Category Pills */}
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
                        </div>

                        <div className='divider'/>

                        {/** Course Sections area  */}
                        <div className='flex flex-col space-y-6 divide'>
                            <h1 className='text-xl font-medium'>Course Sections</h1>
                            <SectionList sections={data.sections} />
                        </div>
                    </form>
                </div>

                {phoneView &&
                    <div className='mx-auto p-8 rounded-xl'>
                        <IphoneView>
                            Hello Jakob

                            <div className='h-24 w-24 bg-green-500 rounded'></div>
                        </IphoneView>
                    </div>
                }
            </div>
        </Layout>
    )
}

export default CourseEdit