import React, { useState } from 'react'
import './Styles/Card.scss'
import Modal from './Modal'


function Card({image, title, desc1, desc2, desc3, desc4}) {

  const [IsOpen, setIsOpen] = useState(false)

  return (
   <>
    <div className='service-card'>
       <img onClick={() => setIsOpen(true)} src={image} alt="" />
       <h4>{title}</h4>
      <button onClick={() => setIsOpen(true)}><i class="fa-solid fa-arrow-right"></i></button>
      <Modal open ={IsOpen} onClose={() => setIsOpen(false)} image={image} title={title} desc1={desc1} desc2={desc2} desc3={desc3} desc4={desc4}/>
      
    </div>
    </> 
  )
}
export default Card