import React from 'react'



function Home() {


      function nextSlide(){
        let activeSlide = document.querySelector('.slide.translate-x-0');
        activeSlide.classList.remove('translate-x-0');
        activeSlide.classList.add('-translate-x-full');
        
        let nextSlide = activeSlide.nextElementSibling;
        nextSlide.classList.remove('translate-x-full');
        nextSlide.classList.add('translate-x-0');
      }

      function previousSlide(){
          let activeSlide = document.querySelector('.slide.translate-x-0');
          activeSlide.classList.remove('translate-x-0');
          activeSlide.classList.add('translate-x-full');
          
          let previousSlide = activeSlide.previousElementSibling;
          previousSlide.classList.remove('-translate-x-full');
          previousSlide.classList.add('translate-x-0');
      }
  




  return (
    <div>

      {/* start slideshow */}
      <div className=" relative welcomeBox px-4 flex flex-col justify-center items-center mt-3 ">

        <div className=' relative w-screen h-96 flex'>

          <div className='slide w-screen h-96 absolute transition-all ease-in-out duration-1000 transform translate-x-0'>
            <div className='absolute w-full h-full bg-overlay'></div>
            <img className = "w-full h-full object-cover" src="https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/columbus/SC_Image_2_de1498ac-793e-4ad1-845b-cf895295bccb.jpg" alt="Lots of shoes" />
          </div>

          <div className='slide w-screen h-96 absolute transition-all ease-in-out duration-1000 transform translate-x-full'>
            <div className='absolute w-full h-full bg-overlay'></div>
            <img className = "w-full h-full object-cover" src="https://kevsbest.com/wp-content/uploads/2021/09/5-Best-Shoe-Stores-in-Albuquerque.png" alt="Lots of shoes" />
          </div>

          <div className='slide w-screen h-96 absolute transition-all ease-in-out duration-1000 transform translate-x-full'>
            <div className='absolute w-full h-full bg-overlay'></div>
            <img className = "w-full h-full object-cover" src="https://cdn.weartesters.com/wp-content/uploads/2021/11/IMG_8146-1024x768.jpg" alt="Lots of shoes" />
          </div>

           <div className='slide w-screen h-96 absolute transition-all ease-in-out duration-1000 transform translate-x-full'>
            <div className='absolute w-full h-full bg-overlay'></div>
            <img className = "w-full h-full object-cover" src="https://whatson.melbourne.vic.gov.au/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaEpJaWxsWXpaak9UTXlOaTB4WXpsakxUUTJOemd0T1dKaE5pMHdOakF3TkRBek5HTTJPR0VHT2daRlZBPT0iLCJleHAiOm51bGwsInB1ciI6ImJsb2JfaWQifX0=--74b1bf51a80a623ed3cb65812da642be10371655/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJYW5CbkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFMb0Eya0NXQUk9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--5c7b32c6a74ee88f2f4469ce3a4ae709d1994efe/142fd9c0-f786-4b60-a6ec-955ebbdae332.jpg" alt="Lots of shoes" />
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

       



        <button className='relative z-10 bottom-7  bg-white text-primary border-2 border-primary  hover:scale-[1.75]   p-2  transform scale-150 rounded-lg font-bold   hover:drop-shadow-lg transition-all duration-300 ease-out'>Shop All</button>
      </div>
      {/* end slideshow */}

      <div className='text-center text-text text-2xl mt-6'>
        Collections
      </div>

      <div className="collections mt-2 grid sm:grid-cols-2 lg:grid-cols-4 gap-y-4 md:gap-y-16">


      <a href="/sneaker-store/dunks">
        <div className='flex justify-center mt-6 h-60'>
          <div className=' relative  w-60 h-60 md:w-72 md:h-72 lg:w-60 lg:h-60 flex items-center justify-center cursor-pointer group drop-shadow-2xl md:hover:drop-shadow-xl'>
            <img className='h-full w-full object-cover rounded-xl' src="https://blog.threadbeast.com/wp-content/uploads/2021/05/694d38b5246f2687dc2f4533393529821d90feb6-1100x735-1.jpg" alt="" />
            <div className='w-full h-full rounded-xl absolute z-10 bg-overlay md:invisible md:group-hover:visible'></div>
            <div className='absolute z-20 text-white text-3xl font-bold md:invisible md:group-hover:visible'>DUNKS</div>
          </div>
        </div>
      </a>

      <a href="/sneaker-store/jordans">
        <div className='flex justify-center mt-6 h-60'>
          <div className=' relative  w-60 h-60 md:w-72 md:h-72 lg:w-60 lg:h-60 flex items-center justify-center cursor-pointer group drop-shadow-2xl md:hover:drop-shadow-xl'>
            <img className='h-full w-full object-cover rounded-xl' src="https://di2ponv0v5otw.cloudfront.net/posts/2019/02/23/5c71fad0d6dc52da75a1629a/m_5c71faeaa5d7c68fec4be460.jpg" alt="" />
            <div className='w-full h-full rounded-xl absolute z-10 bg-overlay md:invisible md:group-hover:visible'></div>
            <div className='absolute z-20 text-white text-3xl font-bold md:invisible md:group-hover:visible'>JORDANS</div>
          </div>
        </div>
      </a>

      <a href="/sneaker-store/af1">
        <div className='flex justify-center mt-6 h-60'>
          <div className=' relative  w-60 h-60 md:w-72 md:h-72 lg:w-60 lg:h-60 flex items-center justify-center cursor-pointer group hover:drop-shadow-2xl'>
            <img className='h-full w-full object-cover rounded-xl' src="https://sothebys-com.brightspotcdn.com/91/5b/726a96c5436f8343f6e706925ebe/032621-mfm-sneaker-029.jpg" alt="" />
            <div className='w-full h-full rounded-xl absolute z-10 bg-overlay md:invisible md:group-hover:visible'></div>
            <div className='absolute z-20 text-white text-3xl font-bold md:invisible md:group-hover:visible'>AIR FORCE 1</div>
          </div>
        </div>
      </a>

     <a href="/sneaker-store/collabs">
      <div className='flex justify-center mt-6 h-60'>
          <div className=' relative  w-60 h-60 md:w-72 md:h-72 lg:w-60 lg:h-60 flex items-center justify-center cursor-pointer group hover:drop-shadow-2xl'>
            <img className='h-full w-full object-cover rounded-xl' src="https://www.kicksonfire.com/wp-content/uploads/2020/07/Grateful-Dead-x-Nike-SB-Dunk-Low-1.jpg" alt="" />
            <div className='w-full h-full rounded-xl absolute z-10 bg-overlay md:invisible md:group-hover:visible'></div>
            <div className='absolute z-20 text-white text-3xl font-bold md:invisible md:group-hover:visible'>COLLABS</div>
          </div>
        </div>
     </a>
       

      

     





      </div>
      



    </div>
  )
}

export default Home