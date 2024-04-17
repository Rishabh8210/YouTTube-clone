import React from 'react'
import Home2 from '../assets/Home2.png'
import SidebarNavButtom from './SidebarNavButtom';
const SidebarNavigation = () => {
  return (
    <div className='ml-5 mr-5 flex flex-col items-center justify-between sticky w-48'>
        <div className='bg-gray-200 p-3 flex h-10 w-full items-center gap-x-8 rounded-xl cursor-pointer hover:bg-gray-300'>
            <img alt='Home' src={Home2} className='h-6'/>
            <p className='text-md font-bold'>Home</p>
        </div>
        {/* <div className='p-3 flex h-10 w-full items-center gap-x-8 rounded-xl cursor-pointer  hover:bg-gray-300'>
            <img alt='Home' src={Home2} className='h-6'/>
            <p className='text-md font-bold'>Home</p>
        </div> */}
        <SidebarNavButtom />
        <SidebarNavButtom />
        <SidebarNavButtom />
        <SidebarNavButtom />
        <SidebarNavButtom />
        <SidebarNavButtom />
        <SidebarNavButtom />
        <SidebarNavButtom />
    </div>
  )
}

export default SidebarNavigation;