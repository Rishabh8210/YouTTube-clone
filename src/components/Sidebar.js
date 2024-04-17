import React from 'react'
import Home2 from '../assets/Home2.png'
const Sidebar = () => {
  return (
    <div className='ml-5 mr-5 flex items-center justify-between sticky w-48'>
        <div className='bg-gray-200 p-2 flex h-10 w-full items-center gap-x-8 rounded-xl cursor-pointer'>
            <img alt='Home' src={Home2} className='h-6'/>
            <p className='text-md font-bold'>Home</p>
        </div>
    </div>
  )
}

export default Sidebar;