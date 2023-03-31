import React, { useState } from 'react'
import './Styles/Card.scss'
import Modal from './Modal'


function Card({image, title}) {

  const [IsOpen, setIsOpen] = useState(false)

  return (
   <>
    <div className='service-card'>
       <img src={image} alt="" />
       <h4>{title}</h4>
      <button onClick={() => setIsOpen(true)}><i class="fa-solid fa-arrow-right"></i></button>
      <Modal open ={IsOpen} onClose={() => setIsOpen(false)} image={image} title={title}/>
      
    </div>
    </> 
  )
}

export default Card