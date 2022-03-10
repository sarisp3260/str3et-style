import React, { useState } from 'react'
import Button from '../Buttons/Button'
import FilterView from '../Filter/FilterView'
import MenuToogle from './MenuToogle'

const Modal = ({title}) => {

    const [menuOpen, setMenuOpen] = useState('block')

    /* console.log(menuOpen) */

  return (
    <section className={`${menuOpen} bg-white px-10 py-7 z-50 absolute top-0 right-0 w-full h-screen shadow-lg sm:w-3/5 lg:w-1/2`}>

        <div className="flex justify-between items-center gap-4">
            <h1 className='text-lg font-black sm:text-xl'>{title}</h1>
            <div onClick={() => setMenuOpen('hidden')}>
              <Button typeBtn='close' />
            </div>
        </div>

        <FilterView/>

    </section>
  )
}

export default Modal