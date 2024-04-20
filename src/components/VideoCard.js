import React from 'react'

const VideoCard = ({prop}) => {
  return (
    <div className='w-80'>
        <img className='rounded-xl' src={prop?.snippet?.thumbnails?.medium?.url} alt='video Thumbnail'/>
        <div>
            {prop?.snippet?.title && <p>{prop?.snippet?.title.slice(0, 60)}</p>}
            <p>{prop?.snippet?.channelTitle}</p>
            <p>{prop?.statistics?.viewCount} views</p>
        </div>
    </div>
  )
}

export default VideoCard