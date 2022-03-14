import React, { useState } from 'react'
import Button from './Button'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { CartState } from '../../context/Context'

const CounterButtons = ({qty, setQty}) => {
    const {state:{products, cart}} = CartState()

    const addQty = () => {
      const newQty = qty + 1
      setQty(newQty)
    }
    const restQty = () => {
      if(qty <= 1) return
      const newQty = qty - 1
      setQty(newQty)
    }
  return (
    <div className='flex gap-6 items-center'>
        <div className="btnsum" onClick={restQty}>
          <Button typeBtn='squareButton' value={<FaMinus/>}/>
        </div>
        <span className='text-2xl text-primary font-semibold sm:text-3xl'>{qty}</span>
        <div className="btnsum" onClick={addQty}>
          <Button typeBtn='squareButton' value={<FaPlus/>}/>
        </div>
    </div>
  )
}

export default CounterButtons