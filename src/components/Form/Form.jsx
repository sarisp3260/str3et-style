import React from 'react'
import { CartState } from '../../context/Context'
import Button from '../Buttons/Button'

const Form = () => {
    
    const {state: {cart}} = CartState()

    let test = <a href={`https://api.whatsapp.com/send?phone=+573162386323&text=Hola soy Name! Y quiero ordenar estos productos: *itemProduct cantidad valor* con un valor total de **. Mis datos son: mi nombre es: Nombre, telefono: 387273872 y mi dirección es: calle 123. Listo eso seria todo, muchas gracias y en espera de esos hermosos productos`}>
        <Button typeBtn='iconButton' value='Terminar la compra' />
    </a>
    console.log(test)
    let styleInput = 'w-full text-center rounded-md p-2'
    let spanStyle = 'text-xl font-semibold flex justify-start py-3'
  return (
    <section className='bg-pink flex flex-col gap-5 justify-center w-full py-5 px-10'>
        <label htmlFor="label-form w-full">
            <span className={spanStyle}>Ingrese su nombre completo:</span>
            <input type="text" className={styleInput} placeholder='Nombre completo'/>
        </label>
        <label htmlFor="label-form">
            <span className={spanStyle}>Ingrese su número de contacto:</span>
            <input type="text" className={styleInput} placeholder='Telefono'/>
        </label>
        <label htmlFor="label-form">
            <span className={spanStyle}>Ingrese su Dirección:</span>
            <input type="text" className={styleInput} placeholder='Dirección'/>
        </label>
        <div className="btn-wapp mx-auto py-5">
            {cart.length > 0 ? <a href={`https://api.whatsapp.com/send?phone=+573162386323&text=Hola soy Name! Y quiero ordenar estos productos: *itemProduct cantidad valor* con un valor total de **. Mis datos son: mi nombre es: Nombre, telefono: 387273872 y mi dirección es: calle 123. Listo eso seria todo, muchas gracias y en espera de esos hermosos productos`}>
                <Button typeBtn='iconButton' value='Terminar la compra' />
            </a> : <Button typeBtn='iconButton' value='En proceso ....' />}
        </div>
    </section>
  )
}

export default Form