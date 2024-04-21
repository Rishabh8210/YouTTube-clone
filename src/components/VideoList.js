import React, {useEffect, useState} from 'react'
import {Youtube_API} from '../Constant.js'
import VideoCard from './VideoCard'
const VideoList = () => {
  const [videosList, setVideoList] = useState([])

  useEffect(()=>{
    getVideos();
  }, [])
  async function getVideos(){
    try{
      const videoData = await fetch(Youtube_API);
      const dataToJson = await videoData.json();
      console.log(dataToJson)
      setVideoList(dataToJson?.items);
    }
    catch{
      console.log("Network error")
      return;
    }
  }
  
  return (
    <div className='flex w-full justify-center flex-wrap gap-x-3 gap-y-10 overflow-auto'>
        {
          videosList && videosList.map((videoData) => {
              return <VideoCard key={videoData?.id} prop = {videoData}/>
          })
        }
    </div>
  )
}

export default VideoList;