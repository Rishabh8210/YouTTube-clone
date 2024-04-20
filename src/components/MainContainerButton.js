import React from 'react'
import { TopbarNavData } from '../Constant'
import MenuButtom from './MenuButtom'
const MainContainerButton = () => {
    return (
        <div className='h-20 px-5 overflow-auto flex items-center gap-8 flex-shrink-0 no-scrollbar'>
            {
                TopbarNavData && TopbarNavData.map((data, ind) => {
                    return <MenuButtom key={ind} prop = {data} />
                })
            }
        </div>
      )
}

export default MainContainerButton