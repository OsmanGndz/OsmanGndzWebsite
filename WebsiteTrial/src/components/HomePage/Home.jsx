import React from 'react'
import Intro from "./Intro"
import OtherInterestArea from "./OtherInterestArea"
import SomeProjects from './SomeProjects'
const Home = () => {
  return (
    <div className='w-full flex flex-col gap-4'>
      <Intro/>
      <OtherInterestArea/>
      <SomeProjects/>
    </div>
  )
}

export default Home