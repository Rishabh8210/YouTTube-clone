import React from 'react'
import Logo from '../assets/Logo.png'
import HamburgMenu from '../assets/HamburgMenu.png'
import SearchIcon from '../assets/Search.png'

const Head = () => {
  return (
    <div className='ml-5 mr-5 h-fit flex items-center justify-between sticky'>
        <div className='h-16 w-40 flex items-center justify-between'>
            <img alt='Menu' src={HamburgMenu} className='h-10 cursor-pointer hover:bg-gray-200 rounded-full'/>
            <img alt='YouTube' src={Logo} className='h-16 cursor-pointer'/>
        </div>
        <div className='h-12 w-2/5 items-center flex'>
            <input type='text' placeholder='Search' className='h-10 border-2 border-opacity-50 border-black w-5/6 rounded-l-full p-4 text-lg'/>
            <div className= 'border-2 border-l-0 border-opacity-50 border-black h-10 rounded-r-full w-20 cursor-pointer flex justify-center bg-gray-200 hover:bg-gray-300'>
                <img alt='Search' src={SearchIcon} className='h-full '/>
            </div>
        </div>
        <div className='h-10 w-40 flex justify-center'>
            <div className='h-10 w-10 bg-black rounded-full'></div>
        </div>
    </div>
  )
}

export default Head;