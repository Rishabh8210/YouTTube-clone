import React from 'react'
import SidebarNavigation from './SidebarNavigations.js'
import MainContainer from './MainContainer.js'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='size-11/12 w-full flex overflow-hidden'>
        <SidebarNavigation />
        <Outlet />
    </div>
  )
}

export default Body