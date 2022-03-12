import React from 'react'
import Button from '../Buttons/Button'
import { propertiesProd } from '../../data/DataProducts'

const CategoryFilter = ({pageProduct}) => {
  
  const categories = propertiesProd[0].categories.split(',')

  /* console.log(categories) */
  return (
    <div className='flex py-6 items-center gap-4 overflow-auto touch-pan-x'>
        {pageProduct === 'pageProduct' ? <Button value='Todos'/> : null}
        {categories.map((category, i) => {
          return <div className="button-cont" key={i}>
            <Button value={category}/>
          </div>
        })}
    </div>
  )
}

export default CategoryFilter