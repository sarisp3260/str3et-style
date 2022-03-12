import React, { useState } from 'react'
import Button from '../Buttons/Button'
import FilterView from '../Filter/FilterView'

const Modal = ({title, text}) => {

    const [menuOpen, setMenuOpen] = useState('block')

    /* console.log(menuOpen) */

  return (
    <section className={`modal ${menuOpen} bg-slate-50 z-10 absolute top-20 right-0 w-full h-fit shadow-lg`}>

        <div className="div px-4 py-5 sm:px-20 sm:py-10">
          <div className="flex justify-between items-center gap-4">
              <div onClick={() => setMenuOpen('hidden')}>
                <Button typeBtn='close' />
              </div>
              <Button value={title}/>
          </div>

          <FilterView/>
        </div>
        <button className='text-xl w-full h-20 bg-primary text-white sm:text-2xl lg:text-3xl hover:bg-primary/80'>{text}</button>
    </section>
  )
}

export default Modal