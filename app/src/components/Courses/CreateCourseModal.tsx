import { PencilSquareIcon } from '@heroicons/react/24/outline'
import React from 'react'

export const CreateCourseModal = () => {
    return (
        <> 
            {/* The button to open modal */}
            <label htmlFor="my-modal-5" className="btn btn-sm modal-button flex space-x-2">
                <PencilSquareIcon className='w-5 h-5' />
                <p className='font-normal'>Create new course</p>
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </>
    )
}
