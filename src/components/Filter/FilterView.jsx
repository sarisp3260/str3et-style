import React from 'react'
import CategoryFilter from './CategoryFilter'

import Button from '../Buttons/Button'

const FilterView = () => {
    const styleText = 'text-xl font-bold sm:text-2xl py-4'
  return (
    <div className='py-6'>
        <div className="products">
            <h1 className={`${styleText}`}>Productos</h1>
            <CategoryFilter/>
        </div>
        <div className="size">
            <h1 className={`${styleText}`}>Talla</h1>
            <div className='flex py-6 items-center gap-4 overflow-auto touch-pan-x'>
                <Button typeBtn='squareButton' value='M'/>
                <Button typeBtn='squareButton' value='XL'/>
                <Button typeBtn='squareButton' value='L'/>
            </div>
        </div>
        <div className="Colors">
            <h1 className={`${styleText}`}>Color</h1>
            <div className='flex py-6 items-center gap-4 overflow-auto touch-pan-x'>
                <Button typeBtn='beige' value='Amarillo'/>
                <Button typeBtn='beige' value='Azul'/>
                <Button typeBtn='beige' value='Blanco'/>
                <Button typeBtn='beige' value='Negro'/>
                <Button typeBtn='beige' value='Rosa'/>
                <Button typeBtn='beige' value='Rojo'/>
            </div>
        </div>

    </div>
  )
}

export default FilterView