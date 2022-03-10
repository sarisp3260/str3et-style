import React, { useState } from 'react'
import Button from './Button'
import { FaMinus, FaPlus } from 'react-icons/fa'

const CounterButtons = () => {
    const [count, setCount] = useState(0)
  return (
    <div className='flex gap-6 items-center'>
        <Button typeBtn='squareButton' value={<FaMinus/>}/>
        <span className='text-2xl font-semibold sm:text-3xl'>{count}</span>
        <Button typeBtn='squareButton' value={<FaPlus/>}/>
    </div>
  )
}

export default CounterButtons