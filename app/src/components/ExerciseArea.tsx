//icons 
import { TrashIcon } from "@heroicons/react/24/outline"
import { Exercise } from "../interfaces/Exercise";

export const ExerciseArea = ({ exercises }: { exercises: Array<unknown> }) => {
    return (
        
        <div className='flex flex-col space-y-4'>
            {exercises.map((exercise:any, key) => {
                return (
                  
                        <div className='flex flex-row justify-between border rounded-lg py-2 px-4 cursor-pointer' key={key}>
                        <p className='font-semibold'>{exercise.title + " " + key}</p>
                        
                        <button><TrashIcon className='w-5 h-5' /></button>
                    </div>
                 
                )
            })}
        </div>
        
    )
}
