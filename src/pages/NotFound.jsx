import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Buttons/Button'

const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-10 p-10 w-full h-screen'>
      <h1 className='text-3xl sm:text-6xl hover:text-red '>404 Not Found</h1>
      <Link to='/'><Button textsize='text-xl sm:text-3xl lg:text-4xl' value='Regresar <'/></Link>
    </div>
  )
}

export default NotFound