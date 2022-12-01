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

export const ExerciseDetail = ({ exercise, eid }: { exercise: Exercise, eid: string }) => {

    const [onWrongFeedbackUrl, setOnWrongFeedbackUrl] = useState({});
    const [mainContentFile, setMainContentFile] = useState({});
    const [answers, setAnswers] = useState<Answer[]>(exercise.answers);
    
    const { register, handleSubmit: handleExerciseSave, formState: { errors } } = useForm();
    const onExerciseSave: SubmitHandler<any> = data => saveExercise(data);

    const token = useAuthStore(state => state.token);

    const saveExercise = (data: any) => {

        try {

            if (answers.length === 0) {
                throw Error("Cannot save exercise when answers is empty. Set 2-4 answers, please")
            }

            const exerciseToSave: Exercise = {
                id: exercise.id,
                sectionId: exercise.sectionId || "",
                title: data.title,
                description: data.description,
                exerciseNumber: exercise.exerciseNumber,
                content: mainContentFile || {},
                onWrongFeedback: {},
                answers: answers
            }

            console.log(exerciseToSave);
            
            
            ExerciseServices.saveExercise(exerciseToSave, token)
                .then(() => alert("Saved"))
                .catch((e) => alert("Failed to save exercise due to error: " + e));
        }
        catch (err) {
            console.error(err)
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

            <div className="rounded-md cursor-pointer  focus:outline-none bg-base-100 border ">
                {/* <div>
                    {exercise.onWrongFeedback ?
                        <h1 className='text-md font-medium mt-2'>On wrong answer feedback video</h1> :
                        <h1 className='text-md font-medium mt-2'>On wrong answer feedback video not uploaded</h1>
                    }
                    <ReactPlayer url={exercise.onWrongFeedback || "https://www.youtube.com/watch?v=KuXjwB4LzSA"} controls={true} light={true} />
                </div>

                <DropZoneComponent update={setOnWrongFeedbackUrl} props={{ exerciseId: eid }} /> */}

                <div>
                    {exercise.content ?
                        <h1 className='text-md font-medium mt-2'>Content video</h1> :
                        <h1 className='text-md font-medium mt-2'>Content video not uploaded</h1>
                    }
                    <ReactPlayer url={exercise.content} controls={true} light={true} />
                </div>
                {/* "https://www.youtube.com/watch?v=KuXjwB4LzSA" */}

                <DropZoneComponent update={setMainContentFile} storageKey={`${exercise.id}/mainContent`} />
            </div>

            <div className="rounded-md cursor-pointer  focus:outline-none bg-base-100 border ">
                <h1 className='text-md font-medium mb-2'>Answers</h1>
                <AnswerCards update={setAnswers} initialAnswers={answers} />
            </div>
            <button type='submit' className="std-button ml-auto py-2 px-4">Save Exercise</button>
        </form>

    );
};

export default ExerciseDetail;
