import React from 'react'
import SidebarNavigation from './SidebarNavigations.js'
import MainContainer from './MainContainer.js'

const Body = () => {
  return (
    <div className='h-1/2'>
        <SidebarNavigation />
        <MainContainer />
    </div>
  )
}

export default Body