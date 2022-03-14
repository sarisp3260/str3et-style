import React, { useState } from 'react'
import { MdOutlineTune } from 'react-icons/md'

import CategoryFilter from '../components/Filter/CategoryFilter'
import Modal from '../components/Modal/Modal'
import CardProduct from '../components/Cards/CardProduct'
import Button from '../components/Buttons/Button'

import { CartState } from '../context/Context'
import { useParams } from 'react-router-dom'

const Products = () => {
  const { state: { products} } = CartState()
  console.log(products)

  const {itemFilter} = useParams()

  let dataArray = []

  if(itemFilter){
    dataArray = products.filter(( prod ) => prod.type === itemFilter)
  }
  else{
    dataArray = products
  }


  console.log(dataArray)

  const [openModal, setOpenModal] = useState()

  return (
    <div className='pt-20 pb-10 px-6 sm:px-12'>
        
        <div className="top-sec flex justify-between items-center pt-4" >
          <h1 className='text-xl font-bold sm:text-2xl'>Todos los productos</h1>
          <div className="filter-icon" onClick={() => setOpenModal(!openModal)}>
            {openModal !== true ? <MdOutlineTune className='text-primary text-2xl sm:text-3xl hover:text-primary/70 '/> : <Button typeBtn='close' />}
          </div>
 
          {openModal && <Modal title='Borrar Filtro' text='Aplicar filtros'/>}
        </div>

        <CategoryFilter pageProduct='pageProduct'/>
        
        <div className="grid-product grid grid-cols-1 place-items-center py-6 sm:grid-cols-3 lg:grid-cols-4">
          {dataArray.map((prod , i) => {
            return <CardProduct prod={ prod } i={i} key={ prod.id}/>
          })}
        </div>

    </div>
    
  )
}

export default Products