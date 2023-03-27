import React from 'react'
import './Styles/Card.scss'

function Card({image, title}) {


  return (
   <>
    <div className='service-card'>
       <img src={image} alt="" />
       <h4>{title}</h4>
       <a href=''><i class="fa-solid fa-arrow-right"></i></a>
    </div>
    </> 
  )
}

export default Card