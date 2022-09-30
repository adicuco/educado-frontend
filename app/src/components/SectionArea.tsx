import React from 'react'

//icons 
import { TrashIcon } from "@heroicons/react/24/outline"
import { Droppable } from 'react-beautiful-dnd'

export const SectionArea = ({ sections }: { sections: Array<unknown> }) => {
    return (
        <div className='flex flex-col space-y-4'>
            {sections.map((section, key) => {
                return (
                    <div className='flex flex-row justify-between border rounded-lg py-2 px-4 cursor-pointer' key={key}>
                        <p className='font-semibold'>{section.name}</p>
                        <button><TrashIcon className='w-5 h-5' /></button>
                    </div>
                )
            })}
        </div>
    )
}
