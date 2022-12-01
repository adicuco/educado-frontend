import axios, { AxiosRequestConfig } from "axios";
import { Exercise } from "../interfaces/Exercise";

const saveExercise = async (
    props: Exercise,
    token: string | null | undefined
  ) => {
    const config: AxiosRequestConfig = {
      headers: { Authorization: `Bearer ${token}` },
    };
  
    // Send the info to exercise service
    const response = await axios.put(
      `http://127.0.0.1:8888/api/exercises/${props.id}`,
      props,
      config
    );

    return response.data
  };

  const addExercise = async (
    props: Exercise,
    token: string | null | undefined,
    sid : string | null | undefined
  ) => {
    const config: AxiosRequestConfig = {
      headers: { Authorization: `Bearer ${token}` },
    };
  
    // Send the info to exercise service
    const response = await axios.post(
      `http://127.0.0.1:8888/api/sections/${sid}/exercises`,
      props,
      config
    )
    
    return response.data
  };

  const ExerciseServices = {
    saveExercise,
    addExercise
  };
  
  export default ExerciseServices;