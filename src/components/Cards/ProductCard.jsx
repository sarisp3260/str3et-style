import React, { useState } from 'react'
import Button from '../Buttons/Button'

const ProductCard = ({image, name, price, description, material, others, keyprod, size}) => {
    const [showButton, setShowButton] = useState(false)
    
  return (
    <div className='p-5 w-fit flex flex-col justify-center text-center' >
        <div className="img-button h-72 grid place-items-center relative shadow-lg rounded-2xl" key={keyprod}> 
            <img src={image} className="w-52" alt="" onClick={() => alert('Hola')} />

            {showButton && <div className="button absolute inset-x-0 bottom-0">
            <Button typeBtn='extra' value='Agregar' extra='bg-primary text-white rounded-b-xl w-full'/>
            </div>}
        </div>
        <h2 className='pt-4 font-semibold text-xl'>Talla:</h2>

        {size.includes('Única') ? 
        <div className="size flex justify-center gap-5 py-4" >  
            <div className="size-item" onClick={() => setShowButton(!showButton)}>
                {showButton !== true ? <Button typeBtn='color' extra='bg-primary text-white' value='Unica'/> : <Button typeBtn='color' extra='bg-beige text-primary' value='Unica'/>}
            </div>
        </div> 

        :<div className="size flex justify-center gap-5 py-4" >  
            <div className="size-item" onClick={() => setShowButton(!showButton)}>
            {showButton !== true ? <Button typeBtn='color' extra='bg-primary text-white' value='M'/> : <Button typeBtn='color' extra='bg-beige text-primary' value='M'/>}
            </div>
            <div className="size-item" onClick={() => setShowButton(!showButton)}>
            {showButton !== true ? <Button typeBtn='color' extra='bg-primary text-white' value='L'/> : <Button typeBtn='color' extra='bg-beige text-primary' value='L'/>}
            </div>
            <div className="size-item" onClick={() => setShowButton(!showButton)}>
            {showButton !== true ? <Button typeBtn='color' extra='bg-primary text-white' value='XL'/> : <Button typeBtn='color' extra='bg-beige text-primary' value='XL'/>}
            </div>
        </div>}


        <span className='text-xl text-primary py-4' onClick={() => alert('Hola')}>{name}</span>
        <span className='text-2xl text-primary font-bold'> {`$ ${price} COP`}</span>
    </div>
  )
}

export default ProductCard