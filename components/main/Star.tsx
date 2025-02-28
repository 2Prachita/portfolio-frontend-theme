import React from 'react'
import StarContent from './sub/StarContent'

function Star() {
  return (
    <div className='relative flex flex-col h-full w-full'>
        <video
        autoPlay
        muted
        loop
        className='rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover'
        >
            <source src='/blackhole.webm' type='video/webm'/>

        </video>
        <StarContent/>
        
    </div>
  )
}

export default Star