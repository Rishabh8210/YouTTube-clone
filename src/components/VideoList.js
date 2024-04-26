import React, {useEffect, useState} from 'react'
import {Youtube_API} from '../Constant.js'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
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
    <div className='flex px-4 w-full flex-wrap gap-x-3 gap-y-10 overflow-auto'> 
        {
          videosList && videosList.map((videoData) => {
              return (
                <Link to={'/watch?v=' + videoData?.id}><VideoCard key={videoData?.id} prop = {videoData}/></Link>
            )
          })
        }
    </div>
  )
}

export default VideoList;