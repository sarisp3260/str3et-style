import React from 'react'
import Button from '../Buttons/Button'

const CategoryFilter = () => {
  return (
    <div className='flex py-6 items-center gap-4 overflow-auto touch-pan-x'>
        <Button value='Todos'/>
        <Button value='Camisetas'/>
        <Button value='Buzos'/>
        <Button value='Medias'/>
        <Button value='Gafas'/>
        <Button value='Bolsas'/>
        <Button value='Stickers'/>
    </div>
  )
}

export default CategoryFilter