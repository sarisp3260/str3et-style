import React from 'react'
import { DataInfo } from '../../data/DataInfo'

function BrandInfo() {

    const lengthData = DataInfo.length

  return (
    <div className="brandInfo auto-cols-max grid grid-cols-1 grid-flow-row-dense sm:grid-cols-2">
        <div className="brand-schedule">
            <h1 className='text-xl font-bold sm:text-2xl'>STR3ET STYLE</h1>
            <h3 className='text-lg sm:text-2xl'>Horario de atención</h3>
            <span className='text-sm sm:text-lg'>Lunes a Viernes de 10:00 a 19:00</span>
        </div>
        <div className="brandUpdates-list hidden lg:grid grid-cols-3 place-items-center">
            {DataInfo.map((element) => <div className="list">
                <span className='text-3xl font-bold pb-2'>{element.title}</span>
                <p>hola</p>
                <p>hola</p>
                <p>hola</p>
                <p>hola</p>
                <p>hola</p>
                <p>hola</p>
                <p>hola</p>
            </div>)}
        </div>
    </div>
  )
}

export default BrandInfo