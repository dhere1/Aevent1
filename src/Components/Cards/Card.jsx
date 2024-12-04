import React from 'react'
import './Card.css'
import oip from '../../Assets/OIP.jpeg'
const Card = () => {
  return (
    <>
    <div className='event-card'>
        <img src={oip} alt="firstimg" className='event-card-img' />
        <h1 className='event-card-title'>iTMeet</h1>
        <p className='event-card-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolores, deleniti quis omnis quasi aspernatur placeat nostrum porro doloremque ex. Sunt placeat perspiciatis possimus, numquam ducimus ipsum earum id eligendi!</p>
        
    </div>
    <button className='learn-more'>Learn More</button>
    </>
  )
}

export default Card