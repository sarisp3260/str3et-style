import React  from 'react'
import {MdMenu, MdOutlineSearch, MdOutlineShoppingBag} from 'react-icons/md'
import CounterItems from './CounterItems'


const Navbar = () => {
  return (
    <nav className='flex justify-between mx-6 h-16 sm:mx-12'>
        <div className="left-items flex items-center gap-2 sm:gap-4">
            {/* {responsive != '' ? null : <MdMenu className='text-3xl font-black hover:text-beige'/>} */}
            <MdMenu className='text-3xl font-black hover:text-beige '/>
            <h1 className='text-lg font-black sm:text-xl'>STR3ET STYLE</h1>
        </div>
        <div className="right-items flex items-center gap-1 sm:gap-4">
            <MdOutlineSearch className='text-3xl hover:text-beige'/>
            <div className="shopCard relative p-2">
              <CounterItems/>
              <MdOutlineShoppingBag className='text-3xl hover:text-beige'/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar

