import axios, { AxiosRequestConfig } from "axios";
import React, { useState, } from "react";



// Components
import DropZoneComponent from "../components/Excercise/dropZone";
import AnswerCards from "../components/Excercise/AnswerCards";
import CourseServices from "../services/course.services";

// Auth
import useAuthStore from "../contexts/useAuthStore";
import { useParams } from "react-router-dom";

export const ExerciseDetail = () => {

    const { id } = useParams();

    const [contentUrl, setContentUrl] = useState("");
    const [answers, setAnswers] = useState([{}]);

    const token = useAuthStore(state => state.token);

    const updateAnswers = (answers: any): any => {
        console.log(answers);

        setAnswers(answers);
    };

    const updateContentUrl = (url: string) => {
        console.log(url);

        setContentUrl(url);
    }

    const saveExercise = () => {

        const exercise = {
            onWrongFeedback: {
                url: "NOT IMPLEMENTED"
            },
            content: {
                url: contentUrl
            },
            answers: answers
        }

        console.log(exercise);
        console.log(token);

        const response = CourseServices.saveExcercise(exercise, token)
            .then(() => alert("Saved"))
            .catch(() => alert("Failed to save exercise"));

    }

    return (
        <>
            <DropZoneComponent update={updateContentUrl} />
            <AnswerCards update={updateAnswers} />

            <button className="border-dashed border-2 border-indigo-800 bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={saveExercise}>Save</button>
        </>
    );
};

export default ExerciseDetail;
