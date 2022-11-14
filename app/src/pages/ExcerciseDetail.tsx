import axios, { AxiosRequestConfig } from "axios";
import React, { Fragment, useState } from "react";

// Auth
import useAuthStore from "../contexts/useAuthStore";

// Components
import DropZoneComponent from "../components/Excercise/dropZone";
import AnswerCards from "../components/Excercise/AnswerCards";
import CourseServices from "../services/course.services";

export const ExcerciseDetail = () => {
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

            <button onClick={saveExercise}>Save</button>
        </>
    );
};

export default ExcerciseDetail;
