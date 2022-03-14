import React from 'react'
import ReactPlayer from 'react-player'

const Middle = () => {
  return (

    <div className="video bg-gradient-to-r from-primary/20 to-red/20 max-h-[42rem] h-[60rem] flex justify-center">
        <ReactPlayer
        url={require('../../assets/BrandVideo.mp4')}
        width='auto'
        height='100%'
        loop
        playing
        muted
        />
    </div>
    
  )
}

export default Middle