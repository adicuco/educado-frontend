import { useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { useParams } from 'react-router-dom'
import useSWR from 'swr';

// Services
import SectionServices from '../services/section.services';

// Components
import { ExerciseArea } from '../components/ExerciseArea'
import { Exercise } from '../interfaces/Exercise'
import useAuthStore from '../contexts/useAuthStore';
import ExerciseServices from '../services/exercise.services';
import { Section } from '../interfaces/CourseDetail';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL + "api";

const SectionEdit = () => {
    const { register: registerSection, handleSubmit: handleSectionUpdate, formState: { errors: sectionErrors } } = useForm();
    const { register: registerExercise, handleSubmit: handleExerciseAdd, formState: { errors: exerciseErrors } } = useForm();

    const { sid } = useParams();

    const token = useAuthStore(state => state.token);

    // Fetch section details
    const { data: sectionData, error: sectionError } = useSWR(
        [`${BACKEND_URL}/sections/${sid}`, token],
        SectionServices.getSectionDetail
    );

    const [section, setSection] = useState<Section>();
    const [exercises, setExercises] = useState<Exercise[]>([]);

    const onExerciseAdd: SubmitHandler<Exercise> = data => addExercise(data);
    const onSectionSave: SubmitHandler<Section> = data => saveSection(data);

    if (sectionError) return <p>"An error has occurred."</p>;
    if (!sectionData) return <p>"Loading..."</p>;

    const addExercise = async (data: Exercise) => {
        console.log(data, token);

        const response = await ExerciseServices.addExercise(data, token, sid)

        const addedExercise = response.data

        sectionData.exercises.push(addedExercise)

        setExercises(sectionData.exercises)
    }

    const saveSection = async (data: Section) => {

        const toSave = { ...sectionData, ...data };

        const response = await SectionServices.saveSection(toSave, token, sid);

        setSection(response.data);
    }

    return (
        //<Layout meta='Section edit page'>
        <div className="w-full">

            {/** Section details edit */}
            <div className='max-w-3xl mx-auto bg-white p-4 rounded-xl'>
                <form onSubmit={handleSectionUpdate(onSectionSave)}
                    className="flex flex-col space-y-6 divide">

                    <div className="flex flex-col space-y-2">
                        <label htmlFor='title'>Title</label>
                        <input type="text" defaultValue={section?.title || sectionData?.title} placeholder={sectionData?.title}
                            className="form-field focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            {...registerSection("title", { required: true })}
                        />
                        {sectionErrors.title && <span>This field is required</span>}
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label htmlFor='description'>Description</label>
                        <textarea rows={4} defaultValue={section?.description || sectionData?.description} placeholder={sectionData?.description}
                            className="resize-none form-field focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                            {...registerSection("description", { required: true })}
                        />
                        {sectionErrors.description && <span>This field is required</span>}
                    </div>

                    <button type="submit" className='std-button ml-auto'>Update Section</button>
                </form>

                <h1 className='text-xl font-medium mb-4'>Exercises</h1>
                <div className='flex-auto flex-col space-y-4' id='exercises'>

                    <ExerciseArea exercises={exercises.length > 0 ? exercises : sectionData.exercises} />

                </div>

                <div className="flex flex-col w-full mb-8">

                    <div className="divider"></div>
                    {/* <div className="grid h-20 card bg-base-300 rounded-box place-items-center">Add Exercise</div> */}
                    <span className="text-xl font-bold">Add new exercise</span>
                </div>

                <div className="card w-96 bg-base-200 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">New Add Exercise!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">


                            {/* TEST */}
                            <form
                    onSubmit={handleExerciseAdd(onExerciseAdd)}
                    className="flex flex-col justify-content align-items space-evenly w-full space-y-2"
                >
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Some awesome title"
                            className="input input-bordered w-full"
                            {...registerExercise("title", { required: true })}
                        />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea
                            className="textarea textarea-bordered h-24"
                            placeholder="Add a description to your exercise"
                            {...registerExercise("description", { required: true })}
                        />
                    </div>
                            <button type='submit' className="btn btn-primary">Add exercise!</button>
                    </form>
                            {/* TEST */}
                        </div>
                    </div>
                </div>
{/*
                <form
                    onSubmit={handleExerciseAdd(onExerciseAdd)}
                    className="flex flex-col justify-content align-items space-evenly w-full space-y-2"
                >
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Some awesome title"
                            className="input input-bordered w-full"
                            {...registerExercise("title", { required: true })}
                        />
                    </div>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea
                            className="textarea textarea-bordered h-24"
                            placeholder="Add a description to your exercise"
                            {...registerExercise("description", { required: true })}
                        />
                    </div>

                    <button type='submit' className="my-2 std-button ml-auto">Add Exercise</button>


                    {/* <button type="submit" className="w-auto px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200">
                        Add Exercise
                    </button> 
                </form>
            */}
            </div>
        </div>
        //</Layout>
    )
}

export default SectionEdit