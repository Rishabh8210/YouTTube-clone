import React from 'react'
import SidebarNavigation from './SidebarNavigations.js'
import MainContainer from './MainContainer.js'

const Body = () => {
  return (
    <div className='size-11/12 w-full flex overflow-hidden'>
        <SidebarNavigation />
        <MainContainer />
    </div>
  )
}

export default Body