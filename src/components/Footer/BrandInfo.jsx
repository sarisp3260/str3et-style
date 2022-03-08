import React from 'react'
import { DataInfo } from '../../data/DataInfo'

const BrandInfo = () => {
  return (
    
    <div className="brandInfo auto-cols-max grid gap-6 grid-cols-1 grid-flow-row-dense sm:grid-cols-2 xl:grid-cols-4">
        <div className="brand-schedule">
            <h1 className='text-xl font-bold sm:text-2xl'>STR3ET STYLE</h1>
            <h3 className='text-lg sm:text-2xl'>Horario de atención</h3>
            <span className='text-sm sm:text-lg'>Lunes a Viernes de 10:00 a 19:00</span>
        </div>
        
        {DataInfo.map((element, index) => <div className="list hidden lg:grid place-items-center" key={index}>
            <span className='text-3xl font-bold pb-2'>{element.title}</span>
            {element.text}
        </div>)}
        
    </div>
  )
}

export default BrandInfo

