import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';

// Services
import CourseServices from '../../services/course.services';

// Icons
import { PlusIcon } from '@heroicons/react/24/outline';
import { useParams } from 'react-router-dom';
import useAuthStore from '../../contexts/useAuthStore';

// Interfaces
type Inputs = {
    title: string
}

export const SectionForm = () => {
    // Query Params
    const { id } = useParams();
    const token = useAuthStore(state => state.token);

    console.log(id + " SectionForm");

    // React useForm setup
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        CourseServices.createSection(data, id, token)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-between items-center border rounded p-2">
                <div >
                    <button type="submit" className='btn btn-ghost'>
                        <PlusIcon width={24} />
                    </button>
                </div>

                <div className='flex justify-between w-full space-x-2 ml-2'>
                    <label htmlFor='title' className='hidden'>Add New</label>
                    <input type="text" placeholder='Add new'
                        className="form-field focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent border-0 w-full shadow-none"
                        {...register("title", { required: true })}
                    />
                </div>
            </div>
        </form>
    )
}
