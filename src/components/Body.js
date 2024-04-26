import React, {useContext} from 'react'
import SidebarNavigation from './SidebarNavigations.js'
import { Outlet } from 'react-router-dom'
import TransparentSidebarNavigation from '../components/TransparentSidebarNavigation.js'
import SidebarContext from '../utils/SidebarContext.js'

const Body = () => {
  const {istransparent} = useContext(SidebarContext)
  return (
    <div className='size-11/12 w-full flex overflow-hidden relative'>
        {istransparent ? <TransparentSidebarNavigation /> : <SidebarNavigation />}
        <Outlet />
    </div>
  )
}

export default Body