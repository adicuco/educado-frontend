import * as React from 'react';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import AuthServices from '../services/auth.services';
import { useState } from 'react';
import Layout from '../components/Layout';
import { toast } from 'react-toastify';


function SingleApplicantView() {
    const { id } = useParams();
    const navigate = useNavigate();


    // TODO: Not finished
    const handleAccept = () => {
        console.log(`Accepted: ${id}`);
        AuthServices.PostAcceptContentCreator(id!)
            .then(res => { console.log(res) })
            .catch(err => toast.error(`Failed to Approve: ${id}`));
    }

    // TODO: Not finished
    const handleReject = () => {
        console.log(`Rejected: ${id}`);
        AuthServices.PostDelcineContentCreator(id!)
            .then(() => {
                toast.success(`Rejected: ${id}`);
                navigate("/educado_admin");
            })
            .catch(() => toast.error(`Failed to Reject: ${id}`));
    }

    // Data Fetching
    const { data, error } = useSWR(
        [`http://127.0.0.1:8888/api/applications/${id}`],
        AuthServices.GetSingleUserApplication
    );

    if (!data) { <>Loading...</>; }
    if (error) { <>Error...</>; }

    return (
        <Layout meta={`Applicant: ${id?.slice(0, 10)}...`}>
            <div className="grid place-items-center h-screen">
                <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
                    <div className=" px-4 py-5 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                            Applicant: <span className="text-blue-500">{data?.data.data.email}</span>
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            Details and informations about the applicant.
                        </p>
                    </div>

                    <div className="border-t border-gray-200">

                        <dl>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Full name
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {data?.data.data.firstName}{data?.data.data.lastName}
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Email address
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {data?.data.data.email}
                                </dd>
                            </div>
                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Motivation
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {data?.data.data.motivation}
                                </dd>
                            </div>
                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                <dt className="text-sm font-medium text-gray-500">
                                    Applied at:
                                </dt>
                                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                    {data?.data.data.createdAt}
                                </dd>
                            </div>
                        </dl>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                        <button onClick={handleReject} type="button" className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Decline
                        </button>
                        <button onClick={handleAccept} type="button" className=" py-2 px-4 flex justify-center items-center  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg  ">
                            Approve
                        </button>
                    </div>
                </div >
            </div>
        </Layout>
    );
}

export default SingleApplicantView;



