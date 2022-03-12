import React from 'react'
import Button from '../Buttons/Button'
import { CartState } from '../../context/Context'



const CardProduct = ({prod , i}) => {
  

  const { state: { products , cart }, dispatch } = CartState()

    /* const [showAddCart, setShowAddCart] = useState(false) */


  return (
    <>
        <div className='p-5 w-fit flex flex-col justify-center text-center' key={prod.id}>
              <div className="img-button h-fit grid place-items-center relative shadow-lg rounded-2xl"> 
                  <img src={prod.image} className="w-52" alt="img-product"/>

                  {
                    cart.some( (p) => p.id === prod.id) ? <div onClick={()=>{
                      dispatch({
                        type: "REMOVING_FROM_CART",
                        payload: prod,
                      })
                    }}
                    className="btn w-full">
                      <Button typeBtn='extra' value='Quitar' extra='bg-red text-white rounded-b-xl w-full' /> 
                    </div>

                    : <div onClick={()=>{
                      dispatch({
                        type: "ADDING_TO_CART",
                        payload: prod,
                      })
                    }} className="btn w-full">
                      <Button typeBtn='extra' value='Agregar' extra='bg-primary text-white rounded-b-xl w-full'/>
                    </div>
                  }
                   
              </div>

              {products[i].size.includes('Unidad') ? <h2 className='pt-4 font-semibold text-xl'>Cantidad:</h2> : <h2 className='pt-4 font-semibold text-xl'>Talla:</h2>}
              
              <div className="div">
                <div className='flex gap-4 justify-center'>
                  {products[i].size.map((sizes, key) => {
                    return <div className='item-size'key={key}>
                      <Button typeBtn='color' extra='bg-primary text-white' value={sizes}></Button>
                    </div>})}
                </div>
              </div>



              <span className='text-xl text-primary py-4' onClick={() => alert('Hola')}>{prod.name}</span>
              <span className='text-2xl text-primary font-bold'> {`$ ${prod.price} COP`}</span>

          </div>
    </>
  )
}

export default CardProduct