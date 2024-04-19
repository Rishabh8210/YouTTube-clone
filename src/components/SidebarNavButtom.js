import React from 'react'
import {SidebarNavData} from '../Constant.js'
const SidebarNavButtom = ({prop}) => {
  return (
    <div className='p-3 flex h-10 w-full items-center gap-x-6 rounded-xl cursor-pointer hover:bg-gray-200'>
        {console.log(prop)}
        <img alt={prop?.name} src={prop?.icon} className='h-6'/>
        <p className='text-md'>{prop?.name}</p>
    </div>
  )
}

export default SidebarNavButtom