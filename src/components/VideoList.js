import React, {useEffect, useState} from 'react'
import {Youtube_API} from '../Constant.js'
import VideoCard from './VideoCard'
const VideoList = () => {
  const [videosList, setVideoList] = useState([])

  useEffect(()=>{
    getVideos();
  }, [])
  async function getVideos(){
    const videoData = await fetch(Youtube_API);
    const dataToJson = await videoData.json();
    console.log(dataToJson)
    setVideoList(dataToJson?.items);
  }
  
  return (
    <div className='flex w-full flex-wrap gap-x-3 gap-y-10 overflow-auto'>
        {
          videosList && videosList.map((videoData) => {
              return <VideoCard key={videoData?.id} prop = {videoData}/>
          })
        }
    </div>
  )
}

export default VideoList;