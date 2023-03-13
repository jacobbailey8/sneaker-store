import React, { useEffect } from 'react'

function Sidebar() {

   

    const handleDrop = () => {
        const dropdown = document.querySelector('#dropdown');

        if(dropdown.classList.contains('translate-y-full')){
            dropdown.classList.remove('translate-y-full');
        }
        else {
            dropdown.classList.add('translate-y-full');

        }
    }

    useEffect(() => {
        const overlay = document.querySelector('#overlay');
        const openBtn = document.querySelector('#openSidebar');
        const closeBtn = document.querySelector('#closeSidebar');
        const sidebar = document.querySelector('#sidebar');
        const dropContainer = document.querySelector('#dropContainer');

       openBtn.addEventListener('click', () => {
            sidebar.classList.add('showSidebar');
            overlay.classList.remove('hidden');
        });
        closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('showSidebar');
            overlay.classList.add('hidden');
        });

        dropContainer.addEventListener('click', handleDrop);
           
    }, [])

 
    

  
    
    
    
    
  return (

    <div id='sidebar' className='fixed z-50 top-0 left-[-20rem] h-screen w-56 md:w-80 bg-gray-100 transition-all duration-300 ease-linear border-r-8 border-primary flex flex-col'>
        <div className='flex justify-end p-1'>
            <svg id="closeSidebar" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>




        <div className='w-48  relative mt-4 ml-4 md:ml-8 flex flex-col justify-start gap-8 text-xl bg-gray-100'>

            <div className='flex items-center gap-5 text-text hover:text-dark cursor-pointer  py-2 w-full rounded-lg group'>
                <div className='border-2 border-primary  h-full rounded-full p-4 group-hover:rounded-lg group-hover:bg-primary  '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                    </svg>

                </div>
                <div className='group-hover:underline transform group-hover:scale-110'>
                    My Closet
                </div>
            </div>

            <div className='flex items-center gap-5 text-text hover:text-dark cursor-pointer  py-2 w-full rounded-lg group'>
                <div className='border-2 border-primary  h-full rounded-full p-4 group-hover:rounded-lg group-hover:bg-primary  '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>


                </div>
                <div className='group-hover:underline transform group-hover:scale-110'>
                    Search
                </div>
            </div>

            <div  id='dropContainer' className='relative w-full'>
                <div className=' flex items-center gap-5 text-text hover:text-dark cursor-pointer  py-2 w-full rounded-lg group'>
                    <div className='border-2 border-primary  h-full rounded-full p-4 group-hover:rounded-lg group-hover:bg-primary  '>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                        </svg>
                    </div>
                    
                    <div className='group-hover:underline transform group-hover:scale-110'>
                        Collections
                    </div>
                </div>
            </div>

            <div id='dropdown' className='absolute bottom-0 transform bg-gray-200 text-text w-full -z-10 transition-all duration-500 ease-out'>
                    <div className='p-2 hover:bg-gray-300 cursor-pointer'>Dunks</div>
                    <div className='p-2 hover:bg-gray-300 cursor-pointer'>Jordans</div>
                    <div className='p-2 hover:bg-gray-300 cursor-pointer'>AF1</div>
                    <div className='p-2 hover:bg-gray-300 cursor-pointer'>Collabs</div>

                </div>
            

        </div>



        <div className=' mt-auto mb-2 rounded-full flex justify-center'>
            <img className='w-12 h-12 object-cover' src={require('../assets/img/github-mark.png')} alt="" />
        </div>
    </div>
    
        

    
  )
}

export default Sidebar