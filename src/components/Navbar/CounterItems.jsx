import React from 'react'
import { CartState } from '../../context/Context'



const CounterItems = () => {
  const { state: {cart} } = CartState()
  console.log(cart)
  return (
    <div className='bg-red rounded-full text-white flex items-center justify-center absolute top-0 right-0'>
        <span className='text-[.8rem] font-bold py-0.5 px-2'>{cart.length}</span>
    </div>
  )
}

export default CounterItems
