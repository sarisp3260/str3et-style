import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { CartState } from '../../context/Context'
import { Link } from "react-router-dom";

import Button from '../Buttons/Button' 

const CartView = () => {
    const { state: {cart}, dispatch} = CartState()
    
  return (
    <>    
    {cart.length > 0 ? 
    <div className='bg-primary px-10 pr-20 py-7 z-30 absolute top-0 right-0 w-full h-screen sm:w-3/5 lg:w-2/5 overflow-auto touch-pan-y'>
        <h1>Producto</h1>
        <div className='text-white z-50 pr-5'>
        {cart.map((item,i) => {
            return <div key={item.id} className='bg-white flex justify-between items-center gap-4 my-5 p-3 '>
                <img src={item.image} className='w-16' alt={item.id} />
                <div className="div-cart flex flex-col items-start gap-3 grow">
                    <span className='text-primary text-xl'>{item.name}</span>
                    <span className='text-primary font-semibold text-xl'>{`$ ${item.price} COP`}</span>
                </div>
                <div className="delete-icon" onClick={()=>{
                        dispatch({
                        type: "REMOVING_FROM_CART",
                        payload: item,
                        })
                    }}>
                    <FaTrashAlt className='text-primary text-xl'/>
                </div>
            </div>
        })}
        <Link to='/Carrito'><Button typeBtn='beige' value='Ir al carrito de compras'/></Link>
        </div> 
    </div>

    : <div className='bg-primary px-10 pr-20 py-7 z-30 absolute top-0 right-0 w-full h-fit sm:w-3/5 lg:w-2/5'>
        <h1 className='text-xl text-white w-96'>No hay ningun producto en el carrito :( <br /> <br /> Animate agrega uno de nuestros espectaculare productos no te arrepentiras!</h1>
    </div>}
    
    </>
  )
}

export default CartView