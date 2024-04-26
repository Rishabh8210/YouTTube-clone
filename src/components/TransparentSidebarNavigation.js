import React, {useContext} from 'react'
import SidebarNavigation from './SidebarNavigations'
import SidebarContext from '../utils/SidebarContext'
const TransparentSidebarNavigation = () => {
  const {isSidebarOpen} = useContext(SidebarContext)
    if(!isSidebarOpen)
        return;
    return (
        <div className='w-full h-full absolute bg-black bg-opacity-20'>
          <SidebarNavigation />
        </div>
      )
}

export default TransparentSidebarNavigation

