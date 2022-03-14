import React, { useState, useEffect } from 'react'
import { CartState } from '../context/Context'
import Button from '../components/Buttons/Button'
import Form from '../components/Form/Form'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {state: {cart}, dispatch} = CartState()

    const [total, setTotal] = useState();

    useEffect(() => {
      setTotal(
        cart.reduce((acc, curr) => acc + Number(curr.price) * curr.quanity, 0)
      );
    }, [cart]);
  return (
    <div className='container-cart grid grid-cols-1 bg-white pt-16 px-10 gap-6 sm:grid-cols-2'>
        <div className="left-grid grid grid-cols-1 py-4 gap-3">
          {cart.map((item) => {
            return <div className="cont-item flex flex-wrap w-full justify-center py-5 px-8 rounded-md shadow-xl shadow-slate-500/40 relative" key={item.id}>
            <div onClick={()=>{
                    dispatch({
                      type: "REMOVING_FROM_CART",
                      payload: item,
                    })
                  }} className="close absolute top-0 right-0">
              <Button typeBtn='close' />  
            </div>
            <div className="cont-cart flex flex-col items-center">
              <div className="details-cart flex flex-wrap items-center gap-3">
                <img className='w-16 h-16 md:w-20' src={item.image} alt="" />
                <h1 className='text-xl text-primary font-semibold sm:text-2xl'>{item.name}</h1>
                <span className='text-xl font-bold sm:text-2xl'>{`$ ${item.price} COP` }</span>
                <select className='w-16 text-center text-white bg-primary/60 p-2 font-bold rounded-lg hover:bg-primary/80' value={item.quanity}
                onChange={(e) => {dispatch({
                  type: 'CHANGE_QTY_ITEM',
                  payload:{
                    id: item.id,
                    quanity: e.target.value
                  }
                }); }}>
                  {[...Array(item.inventory).keys()].map((elemnet, i)=> <option key={i}>{elemnet +1}</option>)}
                </select>
              </div>
              <span className='text-lg'>Mostrar descripción </span>
              <p>{item.description}</p>
            </div>
          </div>
          })}
         
        </div>
        <div className="right-grid py-4 text-center">
          <h1 className='text-xl text-primary font-semibold sm:text-2xl'>Detalles del carrito</h1>
          <div className="text flex flex-col items-center gap-5">
            <span className='text-lg pt-4'>Cantidad de productos agregados al carrito <span className='bg-primary/10 rounded-md px-2'>{cart.length}</span></span>
            {cart.length === 0 && <Link to='/Productos'><Button value='Regresar a selección de producto' textsize='lg:text-lg'/></Link>}
          </div>
          <span className='text-xl sm:text-2xl '>{`Precio Total: ${total}`}</span>
          <Form total={total}/>
        </div>
        
    </div>
  )
}

export default Cart