import axios from 'axios'
import React from 'react'
import useSWR from 'swr'

// Stores
import useAuthStore from '../contexts/useAuthStore'

// Components
import Layout from '../components/Layout'
import NarniaServices from '../services/narnia.services'
import NotFound from './NotFound'
import { PageDescriptor } from '../components/PageDescriptor'

const Home = () => {
  return (
    <Layout meta="Educado Creator">
      <PageDescriptor
        title='Welcome to the Educado Creator'
        desc="All courses are verified by 2 experts and valdiate by an Educado Admin"
      />
    </Layout>
  )
}

export default Home