import React from 'react'
import Card from './Card'
import { Service } from '../Data/Servicii'
import './Styles/Servicii.scss'

function Servicii() {
  return (
    <div className='service' id='service'>
      <h4 className='service-title'>Serviciile noastre</h4>
      <div className='card-box'>
        {Service.map((item, index) => {
          return (
            <Card key={index} image={item.image} title={item.title} desc1={item.description1} desc2 ={item.description2} desc3={item.description3} desc4={item.description4}/>
          )
        })}
    </div>
    </div>
  )
}

export default Servicii