import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { DataInfo } from '../../data/DataInfo'

function CollapseRigth() {
    
  const [isOpen, setIsOpen] = useState(false)

  const toogle = index => {
    if (isOpen === index){
      return setIsOpen(null)
    }
    setIsOpen(index)
  }
  return (
    <div>
        {DataInfo.map((element, index) => <div>
            <div className='lineTop h-0.5 bg-white rounded'></div>
            <div onClick={() => toogle(index)} key={index} className="brandUpdates-text px-6 py-4 flex justify-between items-center">
                <span className='text-lg sm:text-2xl'>{element.title}</span>
                <button className='text-3xl font-black'>{isOpen === index ? <MdKeyboardArrowUp/> : <MdKeyboardArrowDown/>}</button>
            </div>

            {isOpen === index ? 
            <div className="content text-lg px-10 pb-10 py-5 sm:text-2xl">
              <p>{element.text}</p>
            </div> : null}
            </div>)}
    </div>
  )
}

export default CollapseRigth