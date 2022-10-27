//icons 
import { TrashIcon } from "@heroicons/react/24/outline"

import SectionForm from './SectionForm'

export const ExerciseArea = ({ exercises }: { exercises: Array<unknown> }) => {
   
    
    console.log(exercises);
    return (
        
        <div className='flex flex-col space-y-4'>
            {exercises.map((exercise, key) => {
                return (
                  
                        <div className='flex flex-row justify-between border rounded-lg py-2 px-4 cursor-pointer' key={key}>
                        <p className='font-semibold'>{"exercise " + key}</p>
                        
                        <button><TrashIcon className='w-5 h-5' /></button>
                    </div>
                 
                )
            })}
        </div>
        
    )
}
