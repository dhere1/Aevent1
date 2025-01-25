import React from 'react'
import Navbar from '../Navbar'
import './Event.css'
import Card from '../Cards/Card'
import machine from '../../Assets/machinelearning.jpg'
import pythonimg from '../../Assets/python.png'
import mernimg from '../../Assets/mern.jpeg'
import image from '../../Assets/streamline.jpg'

const event=[
    {
        eventName:'Machine Learning',
        aboutEvent:'loremnhsdfnorenlmsdwpemfonckjcnvkbrnlsd',
        img: machine
    },
    {
        eventName: 'python learning',
        aboutEvent: 'loredjankfjsbkbs',
        img: pythonimg

    },
    {
        eventName: 'MERN learning',
        aboutEvent: 'loredjankfjsbkbsjnfkvkbadfd',
        img: mernimg
    },
    {
        eventName: 'Test Event',
        aboutEvent: 'loredjankfjsbkbs',
        img: image
    }
]
const Event = () => {
  return (
    <div className='event-container' >
        <Navbar/> 
        
       <div className='upcoming-event'>
        <h1 className='event-heading'>UPCOMING EVENTS</h1>
        </div> 
        
       <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap", columnGap:"400px"}}>
        {event.map((item)=>(<Card eventName={item.eventName} aboutEvent={item.aboutEvent} img={item.img}/>))}
       </div>

      
    </div>
  )
}

export default Event