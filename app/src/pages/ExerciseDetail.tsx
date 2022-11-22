import { useState, } from "react";
import { useParams } from "react-router-dom";
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

export const ExerciseDetail = ({exercise, eid}: {exercise: Exercise, eid: string}) => {

    console.log(eid);
    
    const { cid, sid } = useParams();

    const [contentUrl, setContentUrl] = useState("");
    const [answers, setAnswers] = useState<Answer[]>([]);

    const { register, handleSubmit: handleExerciseSave, formState: { errors } } = useForm();
    const onExerciseSave: SubmitHandler<any> = data => saveExercise(data);

    const token = useAuthStore(state => state.token);

    const updateAnswers = (answers: any): any => {
        console.log(answers);

        setAnswers(answers);
    };

    const updateContentUrl = (url: string) => {
        console.log(url);

        setContentUrl(url);
    }

    const saveExercise = (data: any) => {

        const exerciseToSave: Exercise = {
            id: exercise.id,
            sectionId: exercise.sectionId || "",
            title: data.title,
            description: data.description,
            exerciseNumber: exercise.exerciseNumber,
            content: contentUrl,
            onWrongFeedback: "NOT IMPLEMENTED",
            answers: answers
        }

        console.log(exerciseToSave);
        console.log(token);

        ExerciseServices.saveExercise(exerciseToSave, token)
            .then(() => alert("Saved"))
            .catch(() => alert("Failed to save exercise"));

    }

    return (

        <form onSubmit={handleExerciseSave(onExerciseSave)}
            className="flex flex-col space-y-6 divide"
        >
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
            <DropZoneComponent update={updateContentUrl} props={{exerciseId: eid}} />
            <AnswerCards update={updateAnswers} />

            <button type='submit' className="std-button ml-auto py-2 px-4">Save Exercise</button>
        </form>
    );
};

export default ExerciseDetail;
