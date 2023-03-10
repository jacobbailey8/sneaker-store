import React from 'react'

function Slideshow() {

    function nextSlide(){
        
        let activeSlide = document.querySelector('.slide.translate-x-0');
        
        if(activeSlide.classList.contains('endSlide')){
          return;
        }

        activeSlide.classList.remove('translate-x-0');
        activeSlide.classList.add('-translate-x-full');
        
        let nextSlide = activeSlide.nextElementSibling;
        nextSlide.classList.remove('translate-x-full');
        nextSlide.classList.add('translate-x-0');

        let activeBar = document.querySelector('.bar.-translate-y-3');
        activeBar.classList.remove('-translate-y-3');
        activeBar.classList.add('translate-y-0');
        
        let nextbar = activeBar.nextElementSibling;
        nextbar.classList.remove('translate-y-0');
        nextbar.classList.add('-translate-y-3');
      }

      function previousSlide(){
          let activeSlide = document.querySelector('.slide.translate-x-0');

          if(activeSlide.classList.contains('firstSlide')){
            return;
          }

          activeSlide.classList.remove('translate-x-0');
          activeSlide.classList.add('translate-x-full');
          
          let previousSlide = activeSlide.previousElementSibling;
          previousSlide.classList.remove('-translate-x-full');
          previousSlide.classList.add('translate-x-0');

          let activeBar = document.querySelector('.bar.-translate-y-3');
          activeBar.classList.remove('-translate-y-3');
          activeBar.classList.add('translate-y-0');
          
          let previousBar = activeBar.previousElementSibling;
          previousBar.classList.remove('translate-y-0');
          previousBar.classList.add('-translate-y-3');
      }

      
  return (
    <div>
        {/* start slideshow */}
      <div className=" relative welcomeBox px-4 flex flex-col justify-center items-center ">

        <div className=' relative w-screen h-96 flex'>

        <div className='slide firstSlide w-screen h-96 absolute transition-all ease-in-out duration-1000 transform translate-x-0'>
            <div className='absolute w-full h-full bg-overlay'></div>
            <img className = "w-full h-full object-cover" src={require('../img/slide3.png')} alt="Lots of shoes" />
        </div>

        <div className='slide w-screen h-96 absolute transition-all ease-in-out duration-1000 transform translate-x-full'>
            <div className='absolute w-full h-full bg-overlay'></div>
            <img className = "w-full h-full object-cover" src={require('../img/slide2.png')} alt="Lots of shoes" />
        </div>

        <div className='slide w-screen h-96 absolute transition-all ease-in-out duration-1000 transform translate-x-full'>
            <div className='absolute w-full h-full bg-overlay'></div>
            <img className = "w-full h-full object-cover" src={require('../img/slide1.png')} alt="Lots of shoes" />
        </div>

        <div className='slide w-screen h-96 absolute transition-all ease-in-out duration-1000 transform translate-x-full'>
            <div className='absolute w-full h-full bg-overlay'></div>
            <img className = "w-full h-full object-cover" src={require('../img/slide4.png')} alt="Lots of shoes" />
        </div>

        <div className='slide endSlide w-screen h-96 absolute transition-all ease-in-out duration-1000 transform translate-x-full'>
            <div className='absolute w-full h-full bg-overlay'></div>
            <img className = "w-full h-full object-cover" src={require('../img/slide5.jpeg')} alt="Lots of shoes" />
        </div>

        </div>


        <div onClick={previousSlide} className='absolute self-start p-2 rounded-full transform hover:scale-125 transition-all duration-300 ease-out cursor-pointer'>
        <svg className='text-white  w-8 h-8' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        
        </div>

        <div onClick={nextSlide} className='absolute self-end p-2 rounded-full transform hover:scale-125 transition-all duration-300 ease-out cursor-pointer'>
        <svg className='text-white  w-8 h-8' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        </div>

        <button className='absolute bg-transparent text-white border-2 border-white  hover:scale-[1.65] p-2 transform scale-150 rounded-lg font-bold   hover:drop-shadow-lg transition-all duration-300 ease-out'>Shop All</button>
        <div className='absolute bottom-3 flex gap-4'>
        <div className=' bar relative justify-self-end w-10 border-b-2 border-white transform -translate-y-3 transition-all duration-1000 ease-out'></div>
        <div className=' bar relative justify-self-end w-10 border-b-2 border-white transform translate-y-0 transition-all duration-1000 ease-out'></div>
        <div className=' bar relative justify-self-end w-10 border-b-2 border-white transform translate-y-0 transition-all duration-1000 ease-out'></div>
        <div className=' bar relative justify-self-end w-10 border-b-2 border-white transform translate-y-0 transition-all duration-1000 ease-out'></div>
        <div className=' bar relative justify-self-end w-10 border-b-2 border-white transform translate-y-0 transition-all duration-1000 ease-out'></div>
        </div>
        </div>
        {/* end slideshow */}
    </div>
  )
}

export default Slideshow