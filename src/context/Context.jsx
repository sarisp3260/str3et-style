import React, { createContext, useContext, useReducer } from 'react'
import { DataProducts } from '../data/DataProducts'
import { CartReducer } from './Reducer'
import { filterReducer } from './Reducer'

const Cart = createContext()

const CartContext = ({ children }) => {
    

    const products = DataProducts.map(item => ({
        id: item.id,
        image: item.image,
        name: item.name,
        price: item.price,
        type: item.type,
        size: item.size.split(','),
        description: item.description,
        material: item.materialcare,
        others: item.other,
        inventory: item.inventory
    }))

    const [state, dispatch] = useReducer(CartReducer, {
        products: products,
        cart: []
    })

    const [filerState, filterDispatch] = useReducer(filterReducer, {
        camisetas: false,
    })
  return (
    <Cart.Provider value={{state, dispatch, filerState, filterDispatch}}>
        {children}
    </Cart.Provider>
  )
}


export const CartState = () => {
    return useContext(Cart)
}
export default CartContext