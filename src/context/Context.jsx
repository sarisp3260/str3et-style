import React, { createContext, useContext, useReducer } from 'react'
import { DataProducts } from '../data/DataProducts'
import { CartReducer } from './Reducer'

const Cart = createContext()

const CartContext = ({ children }) => {
    

    const products = DataProducts.map(item => ({
        id: item.id,
        image: item.image,
        name: item.name,
        price: item.price,
        size: item.size.split(','),
        description: item.description,
        material: item.materialcare,
        others: item.other,
        inventory: item.inventory
    }))
    /* const categories = DataProducts.map(item => ({
        type: item.type
    })) */

    const [state, dispatch] = useReducer(CartReducer, {
        products: products,
        cart: []
    })
  return (
    <Cart.Provider value={{state, dispatch}}>
        {children}
    </Cart.Provider>
  )
}


export const CartState = () => {
    return useContext(Cart)
}
export default CartContext