import React, { useState, useRef, useEffect } from 'react'
import './Clock.css'

// Digital Clock
export const Clock = () => {
    let time = new Date().toLocaleTimeString();
    const [currentTime, setCurrentTime] = useState(time);

    const updateTime = () => {
        let time = new Date().toLocaleTimeString();
        setCurrentTime(time);
    }

    setInterval(updateTime, 1000);
  return (
    <div className='Clock'>
       <h1>{currentTime}</h1> 
    </div>
  )
}

export default Clock;





