import React from 'react'
import Navbar from '../Navbar/Navbar'
import Button from '../Buttons/Button'
import Modal from '../Modal/Modal'

const Opening = () => {
  return (
    <div className='h-screen'>
        <div className="opening h-full w-full bg-img bg-contain relative">
            <Navbar/>
            <div className="opening-text absolute inset-0 botton-0">
              <Modal/>
              <h1>El estilo a  la puerta de tu casa</h1>
              <Button value='Conocer más'/>
            </div>
        </div>
    </div>
  )
}

export default Opening
