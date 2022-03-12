import React, { useState } from 'react'
import { MdOutlineTune } from 'react-icons/md'

import CategoryFilter from '../components/Filter/CategoryFilter'
import Modal from '../components/Modal/Modal'
import CardProduct from '../components/Cards/CardProduct'

import { CartState } from '../context/Context'

const Products = () => {
  const { state: { products } } = CartState()
  /* console.log(products[0].size) */

  const [openModal, setOpenModal] = useState()

  return (
    <div className='pt-20 pb-10 px-6 sm:px-12'>
        
        <div className="top-sec flex justify-between items-center" >
          <h1 className='text-xl font-bold sm:text-2xl'>Todos los productos</h1>
          <div className="filter-icon" onClick={() => setOpenModal(!openModal)}>
            <MdOutlineTune className='text-primary text-2xl sm:text-3xl hover:text-primary/70 '/>
          </div>
 
          {openModal && <Modal title='Borrar Filtro' text='Aplicar filtros'/>}
        </div>

        <CategoryFilter pageProduct='pageProduct'/>
        
        <div className="grid-product grid grid-cols-1 place-items-center sm:grid-cols-3 lg:grid-cols-4">
          {products.map((prod , i) => {
            return <CardProduct prod={ prod } i={i} key={ prod.id}/>
          })}
        </div>
    </div>
    
  )
}

export default Products