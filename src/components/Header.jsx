import React from 'react'
import Logo from '../assets/Logo.png'
function header() {
  return (
   <div className="home-header font-poppins text-white p-2">
    <header className='container flex justify-between lg:justify-around mx-auto items-center'>
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
    <nav className='hidden md:block'>
        <ul className='md:flex space-x-14 '>
            <li className='cursor-pointer'>About Us</li>
            <li className='cursor-pointer'>Services</li>
            <li className='cursor-pointer'>Courses</li>
            <li className='cursor-pointer'>Contact</li>
        </ul>
    </nav>
    <button className='sign-up px-7  py-2 rounded-3xl'>Sign Up</button>
    </header>
   </div>
  )
}

export default header
