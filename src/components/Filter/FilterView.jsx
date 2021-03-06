import React from 'react'


import { propertiesProd } from '../../data/DataProducts'


const FilterView = () => {
    const styleText = 'text-xl font-bold py-2 sm:text-2xl lg:text-3xl '

  return (
    <div className='pt-6'>
        <h1 className={`${styleText}`}>Colores:</h1>
        <div className="color flex gap-3 sm:gap-6 flex-wrap ">{/* sm:overflow-none sm:touch-none */}
            {propertiesProd[0].colors.map((color, i) =>{
                return <label key={i} className="flex items-center gap-3 border-2 border-primary/0 rounded-full w-fit py-2 px-6 hover:border-2 hover:border-primary/40">
                    <input type="checkbox" className="w-5 h-5" />
                    <div className={`rounded-full ${color[1]} w-6 h-6`}></div>
                    <span className="text-lg sm:text-xl">{color[0]}</span>
                </label>
            }) }
        </div>
    </div>
  )
}

export default FilterView