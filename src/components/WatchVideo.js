import React, {useContext, useEffect} from 'react'
import SidebarContext from '../utils/SidebarContext'

const WatchVideo = () => {
  const {istransparent, setTransparentcy} = useContext(SidebarContext)
  const checkTransparency = () => {
    setTransparentcy(!istransparent);
  }
  useEffect(() => {
    checkTransparency();
    return checkTransparency()
  },[])
  return (
    <div className='w-full h-full flex py-5 px-20 gap-8 justify-center'>
      <div className='border-2 h-fit rounded-xl overflow-hidden flex-shrink-0'>
        <iframe width="980" height="550" src="https://www.youtube.com/embed/k4L-D-Q23Jw?si=ySn5PB8aicBAQGd5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div className='w-1/3 rounded-xl border-2 flex-shrink-0'>
          
      </div>
    </div>
  )
}

export default WatchVideo