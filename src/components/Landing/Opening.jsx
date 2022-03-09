import React from 'react'
import Navbar from '../Navbar/Navbar'
import Button from '../Buttons/Button'
import Modal from '../Modal/Modal'

const Opening = () => {
  return (
    <div className='h-screen'>
        <div className="opening h-full w-full bg-[url('https://dsm01pap001files.storage.live.com/y4m1bLv9TmDbovkJRTdrqMl56IaIXckCbujiObywNI91CBQp4zs8dO23jC1GpZYCNNmgy_f8XJnAY2u-8Ma66LB_Pt7PU6F_6TPk5FRioj-pjNPkiEogndFc_hJ-8R_dnx_iLLkxDjaEXGOsi5hLmg9MqEkep1uPMP3Af8h_EOd11dExNzj-5tpKYcMWttAHctV?width=1600&height=1064&cropmode=none')] bg-cover relative">
            <Navbar textColor='text-white'/>
            <div className="opening-text absolute inset-0 botton-0">
              <Modal/>
              <h1>El estilo a  la puerta de tu casa</h1>
              <Button value='Conocer más'/>
            </div>
        </div>
    </div>
  )
}

export default Opening
