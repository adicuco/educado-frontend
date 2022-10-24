import axios from 'axios'
import React from 'react'
import useSWR from 'swr'

// Stores
import useAuthStore from '../contexts/useAuthStore'

// Components
import Layout from '../components/Layout'
import NarniaServices from '../services/narnia.services'

const Home = () => {
  // zustand store
  const token = useAuthStore(state => state.token);

  // SWR fetcher function
  const { data, error } = useSWR(["http://127.0.0.1:8888/api/auth/jwt/test", token], NarniaServices.getNarnia);

  if (!data && !error) { return <>Loading...</> }
  if (error) { return <>Error: {error.message}...</> }

  return (
    <Layout meta="Educado Creator">
      <div className="header flex items-end justify-between mb-12">
        <div className="title">
          <p className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to the Educado Creator
          </p>
          <p className="text-2xl font-light text-gray-500">
            All courses are verified by 2 experts and valdiate by an Educado Admin
          </p>
        </div>
        <div className="text-end">
          <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
            <div className=" relative ">
              <input
                type="text"
                className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Looking for a course?"
              />
            </div>
            <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Home