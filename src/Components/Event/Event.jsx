import React from 'react'
import Navbar from '../Navbar'
import './Event.css'
import Card from '../Cards/Card'
const Event = () => {
  return (
    <div className='event-container' >
        <Navbar/> 
        
       <div className='upcoming-event'>
        <h1 className='event-heading'>UPCOMING EVENTS</h1>
        </div> 
        
        <Card />

      
    </div>
  )
}

export default Event