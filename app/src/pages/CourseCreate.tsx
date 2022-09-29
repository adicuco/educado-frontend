import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";

// components
import Layout from '../components/Layout'

type Inputs = {
    title: string,
    description: string,
};

const CourseCreate = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    console.log(watch("title")); // watch input value by passing the name of it

    return (
        <Layout>
            <div className="w-full">
                {/** Page Descriptor */}
                <div className="header flex items-end justify-between mb-12">
                    <div className="title">
                        <p className="text-4xl font-bold text-gray-800 mb-4">
                            Create a new course
                        </p>
                        <p className="text-2xl font-light text-gray-500">
                            All courses are verified by 2 experts and valdiate by an Educado Admin
                        </p>
                    </div>
                </div>

                <h1>Any place in your app!</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue="test" {...register("title")} />
                    <input defaultValue="" {...register("description", { required: true })} />
                    {errors.title && <span>This field is required</span>}
                    <input type="submit" />
                </form>

                </div>
        </Layout>
    )
}

export default CourseCreate
