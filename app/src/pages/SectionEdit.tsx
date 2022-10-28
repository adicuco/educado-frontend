import React from 'react'
import Layout from '../components/Layout'
import { CategoryPill as Pill } from '../components/CategoryPill'
import { PlusIcon } from '@heroicons/react/24/outline'
import { Link, useLocation, useParams } from 'react-router-dom'
import useSWR from 'swr'
import axios from 'axios'
import { ExerciseArea } from '../components/ExerciseArea'

const SectionEdit = () => {
/*
    const getSectionDetail = (url: string) => {
        return axios.get(url).then(res => res.data)
    }
  */  
    // Get path params
    const { id } = useParams();
    console.log("id: " + id);
    const { pathname } = useLocation();
    console.log(pathname);
    

    // Fetch data with useSWR
   // const { data, error } = useSWR(
   //     `http://127.0.0.1:8888/api/courses/${id}`,
   //     getSectionDetail
   // )
    
    let errors = {title: "some section", description: "bad error"};
    let mydata = {exercises: ["ex1", "ex2"], description: "my excellent course description", id: "1234"};
    //const course = data;
    console.log(mydata);
    // console.log(data.id);
    
    const length = pathname.length - (id?.length ? id?.length : 0) - 8;
    console.log(pathname.length);
    console.log(length);
    
    
    const backPath = pathname.substring(0, length);
    console.log("backurl: " + backPath);
    
    

  return (
    //<Layout meta='Section edit page'>
    //</Layout>
    
    <div className="w-full">
        <p className="text-center">Edit mah section</p>
        <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200">

        <Link to={backPath} className="w-full block">Try to go back</Link>
        </button>

                {/** Course details edit */}
                <div className='max-w-3xl mx-auto bg-white p-4 rounded-xl'>
                    <form onSubmit={()=>{}} className="flex flex-col space-y-6 divide">
                    
                        <div className="flex flex-col space-y-2">
                            <label htmlFor='title'>Title</label>
                            <input type="text" defaultValue={"section title"}
                                className="form-field focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                //{...register("title", { required: true })}
                            />
                            {errors.title && <span>This field is required</span>}
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label htmlFor='description'>Description</label>
                            <textarea rows={4} defaultValue={mydata.description} placeholder={mydata.description}
                                className="resize-none form-field focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                //{...register("description", { required: true })}
                            />
                            {errors.description && <span>This field is required</span>}
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label htmlFor='video'>Section Video</label>
                            <input type="text" placeholder="video URL"
                                className="form-field focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                //{...register("video", { required: true })}
                            />
                            {errors.title && <span>This field is required</span>}
                        </div>

                        <button type="submit" className='std-button ml-auto'>Update Section</button>
                    </form>

                    <h1 className='text-xl font-medium mb-4'>Excersises</h1>

                    <ExerciseArea exercises={mydata.exercises} />
                    
                    <div className='flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-3 '>

                    <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-3 ">
                        <div className="">
                            <input type="text" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="exercise name?" />
                        </div>
                        <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200" type="submit">
                            Add Exercise
                        </button>
                    </form>

                    </div>
                </div>
            </div>
  )
}

export default SectionEdit