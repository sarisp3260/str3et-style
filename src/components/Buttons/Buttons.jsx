import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'


function Buttons({typeBtn, value}) {
  return (
    <>
    {typeBtn === 'beige' ?
    <button className="btn bg-beige text-primary p-6 px-10 my-12 rounded-full hover:bg-primary hover:text-white">
        <span className='text-xl font-bold sm:text-3xl'>{value}</span>
    </button>
    : typeBtn === 'whatsApp' ?
    <button className="btn bg-green-600 text-white p-6 px-10 my-12 rounded-full hover:bg-primary">
      <span className='text-xl font-bold flex items-center gap-4 sm:text-3xl'>{value} <BsWhatsapp className='text-4xl'/></span>
    </button>
    : typeBtn === 'squareButton' ?
    <button className="btn bg-primary text-white p-4 px-6 my-12 hover:bg-beige hover:text-primary">
            <span className='text-xl font-bold sm:text-4xl'>{value}</span>
    </button>
    :
    <button className="btn bg-primary text-white p-6 px-10 my-12 rounded-full hover:bg-beige hover:text-primary">
        <span className='text-xl font-bold sm:text-3xl'>{value}</span>
    </button>
    }
    </>
  )
}

export default Buttons