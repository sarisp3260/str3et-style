import React, { useState } from 'react'
import Button from '../components/Buttons/Button'
import ProductCard from '../components/Cards/ProductCard'
import CategoryFilter from '../components/Filter/CategoryFilter'

import { MdOutlineTune } from 'react-icons/md'
import { DataProducts } from '../data/DataProducts'
import Modal from '../components/Modal/Modal'
import ProductView from './ProductView'

const Products = () => {
  console.log(DataProducts.length)

  const [openModal, setOpenModal] = useState(false)
  return (
    <div className='pt-20 pb-10 px-6 sm:px-12'>
        <div className="top-sec flex justify-between items-center" >
          <h1 className='text-xl font-bold sm:text-2xl'>Todos los productos</h1>
          <div className="filter-icon" onClick={() => setOpenModal(!openModal)}>
            <MdOutlineTune className='text-primary text-2xl sm:text-3xl hover:text-primary/70 '/>
          </div>

          {openModal && <Modal title='Borrar Filtro'/>}
        </div>
        <CategoryFilter/>
        <div className="grid-products grid place-items-center grid-cols-1 py-5 gap-4 sm:grid-cols-3 lg:grid-cols-4 ">
          {DataProducts.map((item, key) => <ProductCard
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            size={item.size}
            description={item.description}
            material={item.materialcare}
            others={item.other}
            inventory={item.inventory}
            keyprod={key}
          />) }
        </div>
        
        <div className="see-more flex justify-center">
          <Button typeBtn='beige' value='Ver más'/>
        </div>

        <ProductView />
    </div>
  )
}

export default Products