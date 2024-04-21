import React from 'react'

const VideoCard = ({prop}) => {
  return (
    <div className='w-80 cursor-pointer flex-shrink-0'>
        <img className='rounded-xl' src={prop?.snippet?.thumbnails?.medium?.url} alt='video Thumbnail'/>
        <div>
            {prop?.snippet?.title && prop?.snippet?.title.length > 60 ? <p>{prop?.snippet?.title.slice(0, 60) + "...."}</p> : <p>{prop?.snippet?.title.slice(0, 60)}</p>}
            <p className='font-semibold'>{prop?.snippet?.channelTitle}</p>
            <p>{prop?.statistics?.viewCount} views</p>
        </div>
    </div>
  )
}

export default VideoCard