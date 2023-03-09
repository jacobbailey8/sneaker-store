import React, { useEffect } from 'react'

function Sidebar() {

    useEffect(() => {
        const overlay = document.querySelector('#overlay');
        const openBtn = document.querySelector('#openSidebar');
        const closeBtn = document.querySelector('#closeSidebar');
        const sidebar = document.querySelector('#sidebar');
    
        openBtn.addEventListener('click', () => {
            sidebar.classList.add('showSidebar');
            overlay.classList.remove('hidden');
        });
        closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('showSidebar');
            overlay.classList.add('hidden');
        });
    
      
    }, [])
    
    
    
  return (

    <div id='sidebar' className='fixed z-50 top-0 left-[-20rem] h-screen w-56 md:w-80 bg-white transition-all duration-300 ease-linear'>
        <div className='flex justify-end p-1'>
            <svg id="closeSidebar" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
    </div>
    
        

    
  )
}

export default Sidebar