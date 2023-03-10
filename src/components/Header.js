import React from 'react'
import Cart from './Cart'
import Sidebar from './Sidebar'

function Header() {

  
  return (
    <div className=' fixed z-30 top-0 w-screen bg-primary flex items-center justify-between px-5 md:px-8'>
      <div id="overlay" className="absolute hidden left-0 top-0 w-screen h-screen bg-overlay z-10"></div>

        

        <svg id='openSidebar' className='text-white w-6 md:w-8 cursor-pointer' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

        <a href="/sneaker-store"><img className="w-36 md:w-48" src="../img/logo.png" alt="logo" /></a>

        <svg id="cartBtn" className='text-white w-6 md:w-8 cursor-pointer' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>

        <Sidebar />
        <Cart />


    </div>
  )
}

export default Header