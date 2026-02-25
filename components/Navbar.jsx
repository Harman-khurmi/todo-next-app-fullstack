import React from 'react'
import logo from '../public/todoLogo.png'
import Image from 'next/image'
const Navbar = () => {
  return (
      <div className='flex items-center container mx-auto  md:px-10 justify-between md:flex-row flex-col gap-6 md:gap-0 py-6'>
          <div className='flex gap-2 items-center justify-center '>
              <Image src={logo} alt="logo" width={36}/>
          <h1 className='text-xl font-bold'>To-do App</h1>
          </div>
          <ul className='flex gap-10 text-base hover:cursor-pointer'>
              <li className='border-b-2 border-transparent hover:border-green-400 transition-all duration-200'>Home</li>
              <li className='border-b-2 border-transparent hover:border-green-400 transition-all duration-200'>Products</li>
              <li className='border-b-2 border-transparent hover:border-green-400 transition-all duration-200'>About</li>
              <li className='border-b-2 border-transparent hover:border-green-400 transition-all duration-200'>Contact</li>
          </ul>
    </div>
  )
}

export default Navbar
