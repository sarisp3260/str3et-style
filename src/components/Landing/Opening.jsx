import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Buttons/Button'

const Opening = () => {
  return (
    <div className='h-screen'>
        <div className="opening grid h-full w-full bg-cover bg-[url('https://dsm01pap001files.storage.live.com/y4m1bLv9TmDbovkJRTdrqMl56IaIXckCbujiObywNI91CBQp4zs8dO23jC1GpZYCNNmgy_f8XJnAY2u-8Ma66LB_Pt7PU6F_6TPk5FRioj-pjNPkiEogndFc_hJ-8R_dnx_iLLkxDjaEXGOsi5hLmg9MqEkep1uPMP3Af8h_EOd11dExNzj-5tpKYcMWttAHctV?width=1600&height=1064&cropmode=none')]">
            <div className="opening-text text-center flex justify-center items-center flex-col px-10 gap-12 sm:px-20">
              <h1 className='text-4xl text-white font-semibold sm:text-7xl'>El estilo a  la puerta de tu casa</h1>
              <Link to='/Productos'><Button textsize='text-xl sm:text-3xl lg:text-4xl' value='Conocer más'/></Link>
            </div>
        </div>
    </div>
  )
}

export default Opening
