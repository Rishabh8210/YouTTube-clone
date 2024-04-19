import React from 'react'
import { TopbarNavData } from '../Constant'
import MenuButtom from './MenuButtom'
const MainContainerButton = () => {
    return (
        <div className='h-20 px-5 overflow-auto flex items-center gap-8'>
            {/* <button className='bg-gray-200 h-11 px-5 py-1 rounded-lg text-base w-fit flex-shrink-0' >All</button> */}
            {
                TopbarNavData && TopbarNavData.map((data, ind) => {
                    console.log(data)
                    return <MenuButtom key={ind} prop = {data} />
                })
            }
        </div>
      )
}

export default MainContainerButton