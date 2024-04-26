import React from 'react'

const WatchVideo = () => {
  return (
    <div className='flex'>
      <div className='m-2 px-8 py-3 border-2 h-fit'>
        <iframe width="980" height="550" src="https://www.youtube.com/embed/k4L-D-Q23Jw?si=ySn5PB8aicBAQGd5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div>
        <h4>
          Suggestions
        </h4>
      </div>
    </div>
  )
}

export default WatchVideo