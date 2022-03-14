import React from 'react'
import { FaWhatsapp, FaInstagram, FaTiktok, FaSpotify, FaFacebookF } from 'react-icons/fa'
import CollapseLeft from '../Collapse/CollapseLeft'
/* import { MdKeyboardArrowDown } from 'react-icons/md' */
import CollapseRigth from '../Collapse/CollapseRigth'
import BrandInfo from './BrandInfo'
import CopyRights from './CopyRights'

const Footer = () => {
  return (
    <footer className='bg-primary text-white px-8 py-8 sm:px-16' >
        
        <BrandInfo />

        <div className="brandUpdates pt-12">
          <h1 className='text-3xl font-bold pb-4'>Información</h1>
          <CollapseRigth dataIn='DataInfo'/>
          <div className='lineTop h-0.5 bg-white rounded'></div>
        </div>

        <div className="faq pt-12">
          <h1 className='text-3xl font-bold pb-4'>FAQ's</h1>
          <CollapseLeft/>
          <div className='lineTop h-0.5 bg-white rounded'></div>
        </div>


        <div className="socialMedia text-4xl pb-5 pt-12 grid grid-cols-5 place-items-center sm:text-6xl"> {/* flex w-full justify-center gap-7 */}
          <FaWhatsapp className='hover:text-green-400'/>
          <FaInstagram className='hover:text-fuchsia-400'/>
          <FaTiktok className='hover:text-cyan-400'/>
          <FaSpotify className='hover:text-green-400'/>
          <FaFacebookF className='hover:text-blue-500'/>
        </div>
        <CopyRights/>
    </footer>
  )
}

export default Footer
