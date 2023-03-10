import React from 'react'

function Quantity(props) {
  return (
    <div className='flex justify-around items-center'>
        <div className='py-1 px-3 bg-gray-200 sm:bg-white sm:hover:bg-gray-200 rounded-full cursor-pointer'>-</div>
        <div className='flex justify-center items-center'>1</div>
        <div className='py-1 px-3  bg-gray-200 sm:bg-white sm:hover:bg-gray-200 rounded-full cursor-pointer'>+</div>

    </div>
  )
}

export default Quantity