import { useState, } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// Components
import DropZoneComponent from "../components/Exercise/dropZone";
import AnswerCards from "../components/Exercise/AnswerCards";

import { Answer } from "../interfaces/Answer";

// Helpers
import { Exercise } from "../interfaces/Exercise"
import ExerciseServices from "../services/exercise.services";

// Auth
import useAuthStore from "../contexts/useAuthStore";

// Video Player
import ReactPlayer from "react-player";
import { toast } from "react-toastify";

export const ExerciseDetail = ({ exercise, eid }: { exercise: Exercise, eid: string }) => {

    const [onWrongFeedbackFile, setonWrongFeedbackFile] = useState({});
    const [mainContentFile, setMainContentFile] = useState({});
    const [answers, setAnswers] = useState<Answer[]>(exercise.answers);

    const { register, handleSubmit: handleExerciseSave, formState: { errors } } = useForm();
    const onExerciseSave: SubmitHandler<any> = data => saveExercise(data);

    const token = useAuthStore(state => state.token);

    const saveExercise = (data: any) => {

        try {

            {/** (3.12.22) Current version of mobile app requires exactly 4 answers */ }
            if (answers.length < 4 || answers.length > 4) {
                throw Error("Please set 4 answers before saving exercise")
            }

            const exerciseToSave: Exercise = {
                id: exercise.id,
                sectionId: exercise.sectionId || "",
                title: data.title,
                description: data.description,
                exerciseNumber: exercise.exerciseNumber,
                content: mainContentFile || {},
                onWrongFeedback: onWrongFeedbackFile || {},
                answers: answers
            }

            ExerciseServices.saveExercise(exerciseToSave, token)
                .then(() => toast.success(`Successfully saved exercise`))
                .catch((e) => toast.error("Failed to save exercise due to error: " + e));
        }
        catch (err) {
            toast.error(`${err}`)
        }

    }

    return (

        <form onSubmit={handleExerciseSave(onExerciseSave)}
            className="flex flex-col space-y-6 divide py-2"
        >
            <div className=" rounded-md cursor-pointer  focus:outline-none bg-base-100 border ">
                <div className="flex flex-col form-control align-items justify-content w-full">
                    <label className="label">
                        <span className="label-text">Exercise title</span>
                    </label>
                    <input
                        type="text"
                        defaultValue={exercise.title}
                        placeholder="Exercise title goes here"
                        className="input input-bordered w-full max-w-xs"
                        {...register("title", { required: true })}
                    />

                    <label className="label">
                        <span className="label-text">Exercise description</span>
                    </label>
                    <textarea
                        className="textarea textarea-bordered h-24"
                        defaultValue={exercise.description}
                        placeholder="Here you can describe the exercise"
                        {...register("description", { required: true })}
                    ></textarea>

                </div>
            </div>

            {/* Content video */}
            <div className="rounded-md cursor-pointer  focus:outline-none bg-base-100 border ">

                <div>
                    {exercise.content ?
                        <h1 className='text-md font-medium mt-2'>Content video</h1> :
                        <h1 className='text-md font-medium mt-2'>Content video not uploaded</h1>
                    }
                    <ReactPlayer url={exercise.content} controls={true} light={true} />
                </div>

                <DropZoneComponent update={setMainContentFile} storageKey={`${exercise.id}/mainContent`} />
            </div>

            <div className="flex flex-col w-full">
                <div className="divider"></div>
            </div>

            {/* feedback Video */}
            <div className="rounded-md cursor-pointer  focus:outline-none bg-base-100 border ">
                <div>
                    {exercise.onWrongFeedback ?
                        <h1 className='text-md font-medium mt-2'>Feedback video (on wrong answer)</h1> :
                        <h1 className='text-md font-medium mt-2'>Feedback video (on wrong answer) not uploaded</h1>
                    }
                    <ReactPlayer url={exercise.onWrongFeedback} controls={true} light={true} />
                </div>

                <DropZoneComponent update={setonWrongFeedbackFile} storageKey={`${exercise.id}/feedbackContent`} />
            </div>

            {/* Answers */}
            <div className="rounded-md cursor-pointer focus:outline-none bg-base-100 border ">
                <h1 className='text-md font-medium mb-2'>Answers</h1>
                <AnswerCards update={setAnswers} initialAnswers={answers} />
            </div>
            <button type='submit' className="std-button ml-auto py-2 px-4">Save Exercise</button>
        </form>

    );
};

export default ExerciseDetail;
