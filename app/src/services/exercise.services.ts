import axios, { AxiosRequestConfig } from "axios";

// Interfaces
import { Exercise } from "../interfaces/Exercise";

type Token = {
  token: string | null | undefined
}

// Send the info to exercise service
const addExercise = async (props: Exercise, token: Token, sid: string | null | undefined) => {
  const response = await axios.post(
    `http://127.0.0.1:8888/api/sections/${sid}/exercises`,
    props,
    { headers: { Authorization: `Bearer ${token}` } }
  )

  return response.data
};

// Send the info to exercise service
const saveExercise = async (props: Exercise, token: Token) => {
  const response = await axios.put(
    `http://127.0.0.1:8888/api/exercises/${props.id}`,
    props,
    { headers: { Authorization: `Bearer ${token}` } }
  );

  return response.data
};


const ExerciseServices = Object.freeze({ addExercise, saveExercise });

export default ExerciseServices;