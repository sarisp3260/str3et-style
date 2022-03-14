import React from 'react'
import Button from '../Buttons/Button'
import FilterView from '../Filter/FilterView'
import CartView from './CartView'

const Modal = ({title, text}) => {


  return (
    <section className={`modal  bg-slate-50 z-10 absolute top-40 right-0 w-full h-fit shadow-lg`}>

        <div className="div px-4 py-5 sm:px-20 sm:py-10">
          <div className="flex justify-between items-center gap-4">
            <h1>Filtro</h1>
              {/* <div onClick={() => setMenuOpen('hidden')}>
                
              </div> */}
              <Button value={title}/>
          </div>

          <FilterView/>
        </div>
        <button className='text-xl w-full h-20 bg-primary text-white sm:text-2xl lg:text-3xl hover:bg-primary/80'>{text}</button>
    </section>
  )
}

export default Modal