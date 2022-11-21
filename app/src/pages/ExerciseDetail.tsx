import axios, { AxiosRequestConfig } from "axios";
import React, { useState, } from "react";



// Components
import DropZoneComponent from "../components/Exercise/dropZone";
import AnswerCards from "../components/Exercise/AnswerCards";
import CourseServices from "../services/course.services";


// Auth
import useAuthStore from "../contexts/useAuthStore";
import { useParams } from "react-router-dom";

export const ExerciseDetail = () => {

    const { id } = useParams();

    
    const [contentUrl, setContentUrl] = useState("");
    const [answers, setAnswers] = useState([{text: "ans1", correct: true}, {text: "ans2", correct: true}]);

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
            title: "no title",
            description: "no desc",
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

        const response = CourseServices.saveExercise(exercise, token)
            .then(() => alert("Saved"))
            .catch(() => alert("Failed to save exercise"));

    }

    return (
        <>
        <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Exercise title</span>
  </label>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  <label className="label">
  </label>

  <label className="label">
    <span className="label-text">Exercise description</span>
    
  </label> 
  <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
  <label className="label">
    
  </label> 

</div>
            <DropZoneComponent update={updateContentUrl} />
            <AnswerCards update={updateAnswers} />

            <button className="border border-2 border-indigo-800 bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={saveExercise}>Save Exercise</button>
        </>
    );
};

export default ExerciseDetail;
