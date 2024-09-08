// import GardensPage from '../components/Jardins'
import dynamic from 'next/dynamic';

const GardensPage = dynamic(() => import('../components/Jardins'), { ssr: false });

import React from 'react'

const Jardins = () => {
  return (
  <GardensPage/>
  )
}

export default Jardins