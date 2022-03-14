import React from 'react'
import Button from '../Buttons/Button'
import { propertiesProd } from '../../data/DataProducts'
import { Link } from 'react-router-dom'

const CategoryFilter = ({pageProduct}) => {
  
  const categories = propertiesProd[0].categories.split(',')

  return (
    <div className='flex py-6 items-center gap-4 overflow-auto touch-pan-x'>
        {pageProduct === 'pageProduct' ? <Link to='/Productos'><Button value='Todos'/></Link>: null}
        {categories.map((category, i) => {
          return <div className="button-cont" key={i}>
            <Link to={`/productos/filter/${category}`}><Button value={category}/></Link>
          </div>
        })}
    </div>
  )
}

export default CategoryFilter