import React, { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useLocation, useParams } from 'react-router-dom'
import axios from 'axios';
import useSWR from 'swr';

// Services
import SectionServices from '../services/section.services';

// Components
import { ExerciseArea } from '../components/ExerciseArea'
import { Exercise } from '../interfaces/Exercise'
import { ExerciseList } from '../components/dnd/ExerciseList';
import { OnChangeCallback } from 'react-toastify/dist/core';
import useAuthStore from '../contexts/useAuthStore';
import Layout from '../components/Layout';

// Interfaces
type AddExerciseType = {
    title: string,
    description: string,
    videoURL: string,
    answers: Array<string>
}

const SectionEdit = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Exercise>();
    const onSubmit: SubmitHandler<Exercise> = data => addExercise(data);

    const { pathname } = useLocation();
    console.log("path: " + pathname);
    let pathMinusEdit = pathname.replace("/edit", "");
    // console.log("pME: " + pathMinusEdit);

    const backendUrl = import.meta.env.VITE_BACKEND_URL + "api" + pathMinusEdit;
    console.log("burl: " + backendUrl);
    const {id: sectionId} = useParams();
    console.log(sectionId?.length);


    const urlLength = pathname.length - (sectionId?.length ? sectionId.length : 0) - 13;
    //console.log(pathname.length);
    //console.log("url length: " + urlLength);

    // Get rid of /section/id from pathname
    let backPath = pathname.replace("/section/", "");
    //backPath = backPath.replace(`"${sectionId}"`, "");
    console.log("bp: " + backPath);

    //const backPath = pathname.substring(0, urlLength);
    // Get path params
    const { sid } = useParams();

    // const location = useLocation();
    // console.log(location);
    // console.log("backurl: " + backPath);

    const token = useAuthStore(state => state.token);

    // Fetch section details
    const { data: sectionData, error: sectionError } = useSWR(
        [`http://127.0.0.1:8888/api/sections/${sectionId}`, token],
        SectionServices.getSectionDetail
    );

    // useSWR built in loaders
    // if (error) return <p>"An error has occurred."</p>;
    // if (!data) return <p>"Loading..."</p>;

    if (sectionData) {
        console.log("response data:");

        console.log(sectionData);
    }

    // Fetch data with useSWR
    const { data: courseData, error: courseError } = useSWR(
        `http://127.0.0.1:8888/api/courses/${sid}`,
        () => console.log(sid)
    );

    let exercise1: Exercise = {
        title: "know your shroom",
        description: "this will teach you to tell good shrooms from bad ones",
        exerciseNumber: 1,
        content: {
            type: "type of content",
            url: "url for content"
        },
        on_wrong_feedback: {
            type: "type of feedback on wrong answer",
            url: "url for feedback for wrong answer"
        },
        answers: [{
            answerNumber: 1,
            text: "correct answer, bro",
            correct: true
        },
        {
            answerNumber: 2,
            text: "wrong answer, bro",
            correct: false
        }]
    }
    let exercise2: Exercise = {
        title: "picking shroom exercise",
        description: "how to pick 'em",
        exerciseNumber: 2,
        content: {
            type: "type of content",
            url: "url for content"
        },
        on_wrong_feedback: {
            type: "type of feedback on wrong answer",
            url: "url for feedback for wrong answer"
        },
        answers: [{
            answerNumber: 1,
            text: "correct answer, bro",
            correct: true
        },
        {
            answerNumber: 2,
            text: "wrong answer, bro",
            correct: false
        }]
    }
    //let errors = { title: "some section", description: "bad error" };

    // my section
    const [myData, setMydata] = useState({
        title: "my section",
        description: "my excellent section description",
        videoURL: "vurl of section",
        exercises: [exercise1, exercise2]
    })

    // console.log("exercises:");

    // console.log(myData.exercises);

    const addExercise = (data: Exercise) => {
        console.log(`input to addExercise: `);
        console.log(data);

        //  console.log(data);

        setMydata({
            ...myData,
            exercises: [...myData.exercises,
            {
                title: data.title,
                description: data.description,
                exerciseNumber: myData.exercises.length + 1,
                content: { type: "content type", url: "content url" }, on_wrong_feedback: {
                    type: "video",
                    url: "url"
                }, answers: data.answers
            }]
        });
        // console.log( (document.getElementById("togg") ? "yes" : "no") );

    }
    console.log(myData);

    console.log(myData.exercises);

    return (
        //<Layout meta='Section edit page'>


        <div className="w-full">

            <div className='flex flex-col cols-1 bg-gray-100 items-center'>
                <p className="flex-auto text-center">Edit mah section</p>
                <button onClick={() => { alert(`you tried to go to: " ${backPath}`) }} className="flex-auto px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200">
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
                        <input type="text" defaultValue={myData.title} placeholder="some title"
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

                <h1 className='text-xl font-medium mb-4'>Exercises</h1>

                <div className='flex-auto flex-col space-y-4' id='exercises'>

                        <ExerciseArea exercises={myData.exercises} />

                </div>

                <div className="flex flex-col w-full">
  
  <div className="divider"></div> 
  <div className="grid h-20 card bg-base-300 rounded-box place-items-center">Add Exercise</div>
</div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Add me exercise</span>

                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                    </label>
                </div>



                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col justify-content align-items space-evenly fit-content bg-red-100 w-auto md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-3"
                >
                    <input
                        type="text"
                        className="flex w-auto rounded-lg border-transparent flex-1 fit-content appearance-none border border-gray-300 w-auto py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="exercise title?"
                        {...register("title", { required: true })}
                    />

                    <input
                        type="text"
                        className="flex w-auto rounded-lg border-transparent flex-1 fit-content appearance-none border border-gray-300 w-auto py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="description please?"
                        {...register("description", { required: true })}
                    />

                    <button type="submit" className=" w-auto px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200">
                        Add Exercise
                    </button>
                </form>

            </div>
        </div>
        //</Layout>
    )
}

export default SectionEdit