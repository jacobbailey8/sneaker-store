import React from 'react'


function Home() {
  return (
    <div>
      <div className="welcomeBox px-4 flex flex-col justify-center items-center mt-3 ">
        <img className = "rounded-lg md:rounded-xl md:w-[44rem]" src="https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/columbus/SC_Image_2_de1498ac-793e-4ad1-845b-cf895295bccb.jpg" alt="Lots of shoes" />
        <button className='relative z-10 bottom-7  bg-primary p-2  transform md:scale-150 rounded-lg font-bold text-white hover:bg-secondary hover:drop-shadow-lg transition-all duration-100 ease-linear'>Shop All</button>
      </div>

      <div className='text-center text-text text-2xl mt-4'>
        Collections
      </div>

      <div className="collections mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-y-4 md:gap-y-16">


      <a href="/dunks">
        <div className='flex justify-center mt-6 h-60'>
          <div className=' relative  w-60 h-60 md:w-72 md:h-72 lg:w-60 lg:h-60 flex items-center justify-center cursor-pointer group drop-shadow-2xl md:hover:drop-shadow-xl'>
            <img className='h-full w-full object-cover rounded-xl' src="https://blog.threadbeast.com/wp-content/uploads/2021/05/694d38b5246f2687dc2f4533393529821d90feb6-1100x735-1.jpg" alt="" />
            <div className='w-full h-full rounded-xl absolute z-10 bg-overlay md:invisible md:group-hover:visible'></div>
            <div className='absolute z-20 text-white text-3xl font-bold md:invisible md:group-hover:visible'>DUNKS</div>
          </div>
        </div>
      </a>

      <a href="/jordans">
        <div className='flex justify-center mt-6 h-60'>
          <div className=' relative  w-60 h-60 md:w-72 md:h-72 lg:w-60 lg:h-60 flex items-center justify-center cursor-pointer group drop-shadow-2xl md:hover:drop-shadow-xl'>
            <img className='h-full w-full object-cover rounded-xl' src="https://di2ponv0v5otw.cloudfront.net/posts/2019/02/23/5c71fad0d6dc52da75a1629a/m_5c71faeaa5d7c68fec4be460.jpg" alt="" />
            <div className='w-full h-full rounded-xl absolute z-10 bg-overlay md:invisible md:group-hover:visible'></div>
            <div className='absolute z-20 text-white text-3xl font-bold md:invisible md:group-hover:visible'>JORDANS</div>
          </div>
        </div>
      </a>

      <a href="af1">
        <div className='flex justify-center mt-6 h-60'>
          <div className=' relative  w-60 h-60 md:w-72 md:h-72 lg:w-60 lg:h-60 flex items-center justify-center cursor-pointer group hover:drop-shadow-2xl'>
            <img className='h-full w-full object-cover rounded-xl' src="https://sothebys-com.brightspotcdn.com/91/5b/726a96c5436f8343f6e706925ebe/032621-mfm-sneaker-029.jpg" alt="" />
            <div className='w-full h-full rounded-xl absolute z-10 bg-overlay md:invisible md:group-hover:visible'></div>
            <div className='absolute z-20 text-white text-3xl font-bold md:invisible md:group-hover:visible'>AIR FORCE 1</div>
          </div>
        </div>
      </a>

     <a href="/collabs">
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