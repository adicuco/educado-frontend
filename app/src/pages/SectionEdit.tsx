import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useLocation, useParams } from 'react-router-dom'
import axios from 'axios';

// Components
import Layout from '../components/Layout'
import { CategoryPill as Pill } from '../components/CategoryPill'
import { PlusIcon } from '@heroicons/react/24/outline'
import { ExerciseArea } from '../components/ExerciseArea'
import { Exercise } from '../interfaces/Exercise'

// Interfaces
type AddExerciseType = {
    title: string,
    description: string
}

const SectionEdit = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<AddExerciseType>();
    const onSubmit: SubmitHandler<AddExerciseType> = data => addExercise(data);

    const { pathname } = useLocation();
    console.log("path: " + pathname);
    let pathMinusEdit = pathname.replace("/edit", "");
    console.log(pathMinusEdit);

    const backendUrl = import.meta.env.VITE_BACKEND_URL + "api" + pathMinusEdit;
    console.log(backendUrl);
    const id: any = useParams();
    const urlLength = pathname.length - (id.length ? id.length : 0) - 8;
    console.log(pathname.length);
    console.log("url length: " + urlLength);

    const backPath = pathname.substring(0, urlLength);
    // const location = useLocation();
    // console.log(location);
    // console.log("backurl: " + backPath);

    // Fetch data with useSWR
    // const { data, error } = useSWR(
    //     `http://127.0.0.1:8888/api/courses/${id}`,
    //     getSectionDetail
    // )

    let exercise1 = { title: "exer1", desc: "exer1descr" }
    let exercise2 = { title: "exer2", desc: "exer2descr" }
    //let errors = { title: "some section", description: "bad error" };

    const [myData, setMydata] = useState({
        title: "my course",
        description: "my excellent course description",
        exercises: [exercise1, exercise2]
    })

    console.log("exercises:");

    console.log(myData.exercises);

    const addExercise = (data: AddExerciseType) => {
        setMydata({
            ...myData,
            exercises: [...myData.exercises, { title: data.title, desc: data.description }]
        });

        console.log(myData);
    }

    return (
        //<Layout meta='Section edit page'>
        //</Layout>

        <div className="w-full">
            <div className='flex flex-col cols-1 bg-gray-100 items-center'>
                <p className="flex-auto text-center">Edit mah section</p>
                <button className="flex-auto px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200">
                    <Link to={backPath} className="w-full block">Try to go back</Link>
                </button>
            </div>


            {/** Section details edit */}
            <div className='max-w-3xl mx-auto bg-white p-4 rounded-xl'>
                <form onSubmit={() => {
                    alert("you tried to submit");
                    async () => await axios.put(backendUrl, myData.exercises);
                }
                } className="flex flex-col space-y-6 divide">

                    <div className="flex flex-col space-y-2">
                        <label htmlFor='title'>Title</label>
                        <input type="text" defaultValue={myData.title}
                            className="form-field focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        //{...register("title", { required: true })}
                        />
                        {errors.title && <span>This field is required</span>}
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label htmlFor='description'>Description</label>
                        <textarea rows={4} defaultValue={myData.description} placeholder={myData.description}
                            className="resize-none form-field focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        //{...register("description", { required: true })}
                        />
                        {errors.description && <span>This field is required</span>}
                    </div>

                    {/* <div className="flex flex-col space-y-2">
                        <label htmlFor='video'>Section Video</label>
                        <input type="text" placeholder="video URL"
                            className="form-field focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        //{...register("video", { required: true })}
                        />
                        {errors.title && <span>This field is required</span>}
                    </div> */}

                    <button type="submit" className='std-button ml-auto'>Update Section</button>
                </form>

                    <h1 className='text-xl font-medium mb-4'>exercises</h1>

                <div className='flex flex-col space-y-4' id='exercises'>

                    <ExerciseArea exercises={myData.exercises} />

                    <div className='flex items-center flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-3 '>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-3"
                        >
                            <button type="submit" className="px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200">
                                y u high?
                            </button>

                            <button type="submit" className="px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200">
                                y u high?
                            </button>

                            <div className="">
                                <input
                                    type="text"
                                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                    placeholder="exercise title?"
                                    {...register("title", { required: true })}
                                />
                            </div>
                            <div className="">
                                <input
                                    type="text"
                                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                    placeholder="description please?"
                                    {...register("description", { required: true })}
                                />
                            </div>
                            <button type="submit" className="flex-auto px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200">
                                Add Exercise
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionEdit