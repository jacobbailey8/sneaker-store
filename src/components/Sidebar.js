import React, { useEffect } from 'react'

function Sidebar() {

    useEffect(() => {
        const openBtn = document.querySelector('#openSidebar');
        const sidebar = document.querySelector('#sidebar');
    
        openBtn.addEventListener('click', () => {
            sidebar.classList.add('showSidebar');
        })
    
      
    }, [])
    
    
    
  return (

    <div id='sidebar' className='fixed top-0 left-[-200px] h-screen w-32 md:w-56 bg-white transition-all duration-500 ease-linear'>
        <ul>
            <li>test</li>
            <li>test</li>
        </ul>
    </div>
    
        

    
  )
}

export default Sidebar