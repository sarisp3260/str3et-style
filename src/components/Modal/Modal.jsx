import React from 'react'
import Button from '../Buttons/Button'
import MenuToogle from './MenuToogle'

const Modal = () => {
  return (
    <section className='bg-beige pl-10 p-7 absolute top-0 left-0 w-full h-screen sm:w-3/5 lg:w-1/2'>

        <div className="flex items-center gap-4">
            <h1 className='text-lg font-black sm:text-xl'>STR3ET STYLE</h1>
            <Button typeBtn='close'/>
        </div>

        <MenuToogle/>
        
    </section>
  )
}

export default Modal