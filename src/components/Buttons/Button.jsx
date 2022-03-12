import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'
import { FaTimes } from 'react-icons/fa'

const Button = ({typeBtn, value, extra, textsize, icon}) => {
  const textStyle = 'text-md font-bold sm:text-lg lg:text-xl'
  return (
    <>
    {typeBtn === 'beige' ?
    <button className="btn bg-beige text-primary py-1 px-4 rounded-full sm:py-2 sm-px-6 hover:bg-primary hover:text-white">
        <span className={`${textStyle} ${textsize}`}>{value}</span>
    </button>
    : typeBtn === 'iconButton' ?
    <button className="btn bg-green-600 text-white py-1 px-4 rounded-full sm:py-2 sm-px-6 hover:bg-primary">
      <span className={`${textStyle} ${textsize} flex items-center gap-4`}>{value} {icon !== '' ? icon : <BsWhatsapp className='text-xl sm:text-2xl'/> } </span>
    </button>
    : typeBtn === 'squareButton' ?
    <button className="btn bg-primary text-white py-1 px-4 sm:py-2 sm-px-6 hover:bg-beige hover:text-primary">
            <span className={`${textsize} ${textStyle}`}>{value}</span>
    </button>
    : typeBtn === 'close' ?
    <button className="btn text-primary hover:text-red">
            <FaTimes className='text-xl sm:text-2xl lg:text-3xl'/>
    </button>
    : typeBtn === 'extra' ?
    <button className={`${extra} btn py-1 px-4 sm:py-2 sm-px-6`}>
        <span className={`${textsize} ${textStyle}`}>{value}</span>
    </button>
    : typeBtn === 'color' ?
    <button className={`${extra} btn py-1 px-4 sm:py-2 sm-px-6`}>
        <span className={`${textsize} ${textStyle}`}>{value}</span>
    </button>
    :
    <button className="btn bg-primary text-white py-1 px-4 rounded-full sm:py-2 sm-px-6 hover:bg-beige hover:text-primary">
        <span className={`${textsize} ${textStyle}`}>{value}</span>
    </button>
    }
    </>
  )
}

export default Button
