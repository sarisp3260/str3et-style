import React, {useState} from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi';
import { dataFAQ } from '../../data/DataFAQ'

function CollapseLeft() {
  const [isOpen, setIsOpen] = useState(false)

  const toogle = index => {
    if (isOpen === index){
      return setIsOpen(null)
    }
    setIsOpen(index)
  }
  console.log(isOpen)
    
  return (
    <div>
        {dataFAQ.map((element, index) => <div>
            <div className='lineTop h-0.5 bg-white rounded'></div>
            <div onClick={() => toogle(index)} key={index} className="brandUpdates-text px-6 py-4 flex justify-between items-center">
                <button className='text-3xl'>{isOpen === index ? <FiMinus/> : <FiPlus/>}</button>
                <span className='text-lg sm:text-2xl'>{element.title}</span>
            </div>
            {isOpen === index ? (
            <div className="content text-lg px-10 pb-10 py-5 sm:text-2xl">
              <p>{element.text}</p>
            </div>
             ) : null}
            </div>)}
    </div>
  )
}

export default CollapseLeft