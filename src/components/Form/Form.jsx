import React, { useState } from 'react'
import { CartState } from '../../context/Context'
import Button from '../Buttons/Button'

const Form = ({total}) => {
    
    const {state: {cart}} = CartState()

    const [name, setName] = useState('')
    const [direction, setDirection] = useState('')
    const [tel, setTel] = useState('')

    let cartapi = cart.map((item) => item.name )

    let styleInput = 'w-full text-center rounded-md p-2'
    let spanStyle = 'text-xl font-semibold flex justify-start py-3'
  return (
    <section className='bg-pink flex flex-col gap-5 justify-center w-full py-5 px-10'>
        <label htmlFor="label-form w-full">
            <span className={spanStyle}>Ingrese su nombre completo:</span>
            <input onChange={(t) => setName(t.target.value)} value={name} type="text" className={styleInput} placeholder='Nombre completo'/>
        </label>
        <label htmlFor="label-form">
            <span className={spanStyle}>Ingrese su número de contacto:</span>
            <input onChange={(t) => setTel(t.target.value)} value={tel} type="text" className={styleInput} placeholder='Telefono'/>
        </label>
        <label htmlFor="label-form">
            <span className={spanStyle}>Ingrese su Dirección:</span>
            <input onChange={(t) => setDirection(t.target.value)} value={direction} type="text" className={styleInput} placeholder='Dirección'/>
        </label>
        <div className="btn-wapp mx-auto py-5">
            {cart.length > 0 ? <a href={`https://api.whatsapp.com/send?phone=+573162386323&text=Hola soy Name! Y quiero ordenar estos productos: *${cartapi}* con un valor total de $ *${total}* COP. Mis datos son: %0D%0A mi nombre es: *${name !== '' ? name : 'No tengo nombre pero puedes llamarme amigo'}*, %0D%0A telefono: *${tel !== '' ? tel : 'Se me olvido poner número'}*, %0D%0A y mi dirección es: *${direction !== '' ? direction : 'Preguntame por mi dirección'}*. %0D%0A Listo eso seria todo, muchas gracias y en espera de esos hermosos productos`} target='_blank' rel='noreferrer'>
                <Button typeBtn='iconButton' value='Terminar la compra' />
            </a> : <Button typeBtn='iconButton' value='En proceso ....' />}
        </div>
    </section>
  )
}

export default Form