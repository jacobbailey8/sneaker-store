import React from 'react'
import Cart from './Cart'
import Sidebar from './Sidebar'
import { useEffect, useState } from 'react'

function Header(props) {

  const [headerSize, setHeaderSize] = useState("6rem");
  const [headerColor, setHeaderColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 80 ? setHeaderColor("#FF613C") : setHeaderColor("transparent");
    window.scrollY > 80 ? setHeaderSize("4rem") : setHeaderSize("6rem");
  };
  
  useEffect(() => {
    if (window.location.pathname === '/sneaker-store'){
      window.addEventListener("scroll", listenScrollEvent);
    }
    else {
      setHeaderColor('#FF613C');
      setHeaderSize('4rem');
    }
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  

  
  return (
    <div style={{backgroundColor: headerColor, height: headerSize, transition: "all 1s"}} className='header fixed z-30 top-0 w-screen bg-transparent flex items-center justify-between px-5 md:px-8'>
      <div id="overlay" className="absolute hidden left-0 top-0 w-screen h-screen bg-overlay z-10"></div>

        

        <svg id='openSidebar' className='text-white w-6 md:w-8 cursor-pointer' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>

        <a href="/sneaker-store"><img className="w-24 md:w-32 justify-self-center cursor-pointer" src={require("../assets/img/logo.png")} alt="logo" /></a>


        <div className='flex gap-4 sm:gap-6'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='text-white w-6 md:w-8 cursor-pointer'>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>

          <svg id="cartBtn" className='text-white w-6 md:w-8 cursor-pointer' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>

        </div>
       

        <Sidebar />
        <Cart />


    </div>
  )
}

export default Header