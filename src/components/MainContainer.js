import React from 'react'
import MainContainerButton from './MainContainerButton.js'
import VideoList from './VideoList.js'

const MainContainer = () => {
  return (
    <div className='w-full flex flex-col'>
        <MainContainerButton />
        <VideoList />
    </div>
  )
}

export default MainContainer;