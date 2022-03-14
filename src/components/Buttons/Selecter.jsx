import React from 'react'
import { CartState } from '../../context/Context'

const Selecter = ({id}) => {
    const {state: {cart}} = CartState()
  return (
    <>
    <select className='w-16' name="qty" value={cart.quanity}>
        <option value="ho">{cart.inventory}</option>
        <option value="ho">21</option>
        <option value="ho">21</option>
    </select>
    </>
  )
}

export default Selecter