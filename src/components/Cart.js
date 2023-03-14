import React, { useEffect } from 'react'

function Cart() {
    useEffect(() => {
      const overlay = document.querySelector('#overlay');
      const cartBtn = document.querySelector('#cartBtn');
      const closeCartBtn = document.querySelector('#closeCart');
      const cart = document.querySelector('#cart');
    
      cartBtn.addEventListener('click', () => {
        cart.classList.add('showCart');
        overlay.classList.remove('hidden');
      });

      closeCartBtn.addEventListener('click', () => {
        cart.classList.remove('showCart');
        overlay.classList.add('hidden');
      })
      
    }, [])
    
  return (
    <div id="cart" className=' border-2 border-primary fixed z-20 left-[10vw] md:left-[20vw] opacity-0 top-[20%] h-[25rem] sm:h-[30rem] w-[80vw] md:w-[60vw] bg-gray-100 rounded drop-shadow-2xl transform -translate-y-48 transition-all duration-300 ease-out'>
        <div className='flex justify-end'>
            <svg id="closeCart" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
    </div>
  )
}

export default Cart