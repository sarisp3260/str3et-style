import React, { useState } from 'react'
import Button from '../Buttons/Button'

const ProductCard = ({image, name, price, description, material, others, keyprod}) => {
    const [showButton, setShowButton] = useState(false)
  return (
    <div className='p-5 w-fit flex flex-col justify-center text-center' >
        <div className="img-button relative shadow-lg rounded-2xl" key={keyprod}> 
            <img src={image} className="w-52" alt="" onClick={() => alert('Hola')} />

            {showButton && <div className="button absolute inset-x-0 bottom-0">
            <Button typeBtn='extra' value='Agregar' extra='bg-primary text-white rounded-b-xl w-full'/>
            </div>}
        </div>
        
        <div className="size flex justify-center gap-5 py-4" >  
            <div className="size-item" onClick={() => setShowButton(!showButton)}>
                <Button typeBtn='squareButton' value='M'/>
            </div>
            <div className="size-item" onClick={() => setShowButton(true)}>
                <Button typeBtn='squareButton' value='L'/>
            </div>
            <div className="size-item" onClick={() => setShowButton(true)}>
                <Button typeBtn='squareButton' value='XL'/>
            </div>
        </div>


        <span className='text-xl text-primary' onClick={() => alert('Hola')}>{name}</span>
        <span className='text-2xl text-primary font-bold'> {`$ ${price} COP`}</span>
    </div>
  )
}

export default ProductCard