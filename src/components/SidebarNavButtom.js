import React from 'react'
import {SidebarNavData} from '../Constant.js'
const SidebarNavButtom = () => {
  return (
    <div className='p-3 flex h-10 w-48 items-center gap-x-8 rounded-xl cursor-pointer  hover:bg-gray-200'>
        <img alt={SidebarNavData?.[0]?.name} src={SidebarNavData?.[0]?.icon} className='h-6'/>
        <p className='text-md font-bold'>{SidebarNavData?.[0]?.name}</p>
    </div>
  )
}

export default SidebarNavButtom