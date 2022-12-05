import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";

// Contexts
import useAuthStore from '../contexts/useAuthStore';

// Components
import Layout from "../components/Layout";
import { PageDescriptor } from '../components/PageDescriptor';

type ProfileInputs = {
    about: string
}

type PersonalInputs = {
    firstName: string,
    lastName: string
}

const Profile = () => {

    const token = useAuthStore(state => state.token);
    // use-form setup
    const { register: profileRegister, handleSubmit: profileHandleSubmit, formState: { errors : profileErrors } } = useForm<ProfileInputs>();
    const { register: personalRegister, handleSubmit: personalHandleSubmit, formState: { errors: personalErrors } } = useForm<PersonalInputs>();

    // success on submit handler
    const onProfileSubmit: SubmitHandler<ProfileInputs> = async (data) => { };
    const onPersonalSubmit: SubmitHandler<PersonalInputs> = async (data) => { };

    return (
        <Layout meta='Profile'>

            {/** Page Descriptor */}
            <PageDescriptor
                title="Profile"
                desc="Here you can update your profile settings"
            />

            {/** Profile settings */}
            <div className='container mx-auto flex flex-col p-6'>
                <div>
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="md:col-span-1">
                            <div className="px-4 sm:px-0">
                                <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
                                <p className="mt-1 text-sm text-gray-600">
                                    This information will be displayed publicly so be careful what you share.
                                </p>
                            </div>
                        </div>
                        <div className="mt-5 md:col-span-2 md:mt-0">
                            <form onSubmit={profileHandleSubmit(onProfileSubmit)}>
                                <div className="shadow sm:overflow-hidden sm:rounded-md">
                                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                                        <div>
                                            <label htmlFor="about" className="block text-sm font-medium text-gray-700 mb-2">
                                                About
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    id="about"
                                                    rows={3}
                                                    className="form-field focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                                    placeholder="you@example.com"
                                                    {...profileRegister("about", { required: true })}
                                                />
                                                {personalErrors.firstName && <span>This field is required</span>}
                                            </div>
                                            <p className="mt-2 text-sm text-gray-500">
                                                Brief description for your profile. URLs are hyperlinked.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center btn btn-sm btn-primary"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-5">
                        <div className="border-t border-gray-200" />
                    </div>
                </div>

                <div className="mt-10 sm:mt-0">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="md:col-span-1">
                            <div className="px-4 sm:px-0">
                                <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                                <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
                            </div>
                        </div>
                        <div className="mt-5 md:col-span-2 md:mt-0">
                            <form onSubmit={personalHandleSubmit(onPersonalSubmit)}>
                                <div className="overflow-hidden shadow sm:rounded-md">
                                    <div className="bg-white px-4 py-5 sm:p-6">
                                        <div className="grid grid-cols-6 gap-6">
                                            <div className="col-span-6">
                                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-2">
                                                    First name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="first-name"
                                                    autoComplete="given-name"
                                                    className="form-field focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                                    {...personalRegister("firstName", { required: true })}
                                                />
                                                {personalErrors.firstName && <span>This field is required</span>}
                                            </div>

                                            <div className="col-span-6">
                                                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Last name
                                                </label>
                                                <input
                                                    type="text"
                                                    id="last-name"
                                                    autoComplete="family-name"
                                                    className="form-field focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                                    {...personalRegister("firstName", { required: true })}
                                                />
                                                {personalErrors.lastName && <span>This field is required</span>}
                                            </div>

                                            <div className="col-span-6">
                                                <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Email address
                                                </label>
                                                <input
                                                    type="text"
                                                    name="email-address"
                                                    id="email-address"
                                                    autoComplete="email"
                                                    className="form-field focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center btn btn-sm btn-primary"
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Profile;

