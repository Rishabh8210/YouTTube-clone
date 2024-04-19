import React from 'react'
import Home2 from '../assets/Home2.png'
import { SidebarNavData } from '../Constant.js';
import SidebarNavButtom from './SidebarNavButtom';
const SidebarNavigation = () => {
  return (
    <div className='ml-5 mr-5 w-48 flex-col  overflow-auto '>
      <div className='w-full flex flex-col gap-2'>
        {
          SidebarNavData?.functionality && SidebarNavData?.functionality.map((data, index) => {
            return <SidebarNavButtom prop={data} key={index} />
          })
        }
        <span className='border-2'></span>
      </div>
      <div className='w-full flex flex-col gap-2'>
        <p className='m-2 text-bold text-xl font-semibold'>You</p>
        {
          SidebarNavData?.userData && SidebarNavData?.userData.map((data, index) => {
            return <SidebarNavButtom prop={data} key={index} />
          })
        }
        <span className='border-2'></span>
      </div>
      <div className='flex flex-col w-full'>
        <p className='m-2 text-bold text-xl font-semibold'>You</p>
        {
          SidebarNavData?.userData && SidebarNavData?.userData.map((data, index) => {
            return <SidebarNavButtom prop={data} key={index} />
          })
        }
      </div>
    </div>
  )
}

export default SidebarNavigation;