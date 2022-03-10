import React, { useEffect, useState }  from 'react'
import {MdMenu, MdOutlineSearch, MdOutlineShoppingBag} from 'react-icons/md'
import { useLocation } from 'react-router-dom'
import CounterItems from './CounterItems'
import MenuToogle from '../Modal/MenuToogle'


const Navbar = ({textColor}) => {

  const location = useLocation()

  const [menuOpen, setMenuOpen] = useState(false)

  const [colorNav, setColorNav] = useState('bg-white/40')
  
 
  useEffect(() =>{
    window.addEventListener('scroll', () => {
      setMenuOpen(false)
      
    });
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0){
        setColorNav('bg-white')
      }
      else
      setColorNav('bg-white/40')
    } )
  },[])
  
  
  return (
    <nav className={`flex ${colorNav} justify-between px-6 h-16 fixed top-0 w-full z-20 sm:px-12`}>
      <div className={`left-items flex items-center gap-2 sm:gap-4  ${textColor}`}>
          <div onClick={() => {setMenuOpen(!menuOpen); /* console.log('hg') */}}>
            <MdMenu className='text-2xl font-black sm:text-4xl hover:text-primary/60' />
          </div>
          <h1 className='text-lg font-black sm:text-xl'>STR3ET STYLE</h1>
      </div>
      <div className={`leftright-items flex items-center gap-1 sm:gap-4 ${textColor}`}>
          {location.pathname !== '/' && <MdOutlineSearch className='text-2xl sm:text-4xl hover:text-primary/60'/>}
          <div className="shopCard relative p-2">
            <CounterItems/>
            <MdOutlineShoppingBag className='text-2xl sm:text-4xl hover:text-primary/60'/>
          </div>
      </div>
      {menuOpen && <div onClick={()=> setMenuOpen(false)}><MenuToogle/></div>}
    </nav>
  )
}

export default Navbar

