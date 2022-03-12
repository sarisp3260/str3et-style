import React from 'react'
import Button from '../components/Buttons/Button'
import CollapseRigth from '../components/Collapse/CollapseRigth'
import CounterButtons from '../components/Buttons/CounterButtons'

const ProductView = () => {
  return (
    <div className='h-screen ' key=''>
      <div className='grid grid-cols-1 grap-5 md:grid-cols-2 place-items-center'>
          <img className='w-80 md:w-fit' src="https://dsm01pap001files.storage.live.com/y4mrKpCHmjijOUuDRaIVNNU9W13l3TgXvuIvqnSlq--lncnL5syvRyr7pMB2ii9JEn-4H_-ZBsbsdz_HFBeRKo46eKEBUAnuqU8sTOuCoiOO9mP77pQhsghPdWfETgLAWNbJEMu3_ldzBqn3FrnxI-Ou6Ya4n1JuNfBvsbv0Scci-kSwktEM7K6jCWlCCDDk3Sy?width=500&height=500&cropmode=none" alt="" />
          <div className="detail-product flex flex-col items-center gap-6 px-8">
            <h1 className='text-primary text-xl font-bold sm:text-3xl'>Name product</h1>
            <span className='text-primary text-xl font-semibold sm:text-2xl'>$ Price COP</span> 
            <CounterButtons/>
            <div className="size flex justify-center gap-5 py-4" >  
                <div className="size-item">
                    <Button typeBtn='squareButton' value='M'/>
                </div>
                <div className="size-item">
                    <Button typeBtn='squareButton' value='L'/>
                </div>
                <div className="size-item">
                    <Button typeBtn='squareButton' value='XL'/>
                </div>
            </div>
            <div className="descrip">
              <h2 className='text-primary text-xl font-bold sm:text-3xl'>Descripción</h2>
              <p className='text-primary text-md sm:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A deleniti, eos officiis unde in corporis. Possimus hic explicabo similique dolore corrupti. Blanditiis voluptate repellat, beatae quam rem doloribus cum. Ex!</p>
            </div>

          </div>
      </div>
      <CollapseRigth dataIn='DataInfo'/>
    </div>
  )
}

export default ProductView