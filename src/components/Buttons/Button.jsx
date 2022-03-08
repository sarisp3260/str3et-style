import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'

const Button = ({typeBtn, value}) => {
  return (
    <>
    {typeBtn === 'beige' ?
    <button className="btn bg-beige text-primary py-3 px-6 rounded-full hover:bg-primary hover:text-white">
        <span className='text-xl font-bold sm:text-3xl'>{value}</span>
    </button>
    : typeBtn === 'whatsApp' ?
    <button className="btn bg-green-600 text-white py-3 px-6 rounded-full hover:bg-primary">
      <span className='text-xl font-bold flex items-center gap-4 sm:text-3xl'>{value} <BsWhatsapp className='text-4xl'/></span>
    </button>
    : typeBtn === 'squareButton' ?
    <button className="btn bg-primary text-white py-3 px-6 hover:bg-beige hover:text-primary">
            <span className='text-xl font-bold sm:text-4xl'>{value}</span>
    </button>
    : typeBtn === 'close' ?
    <button className="btn text-primary hover:text-red">
            <FaTimes className='text-xl sm:text-2xl'/>
    </button>
    :
    <button className="btn bg-primary text-white py-3 px-6 rounded-full hover:bg-beige hover:text-primary">
        <span className='text-xl font-bold sm:text-3xl'>{value}</span>
    </button>
    }
    </>
  )
}

export default Button
