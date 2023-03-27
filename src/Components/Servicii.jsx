import React from 'react'
import Card from './Card'
import { Service } from '../Data/Servicii'
import './Styles/Servicii.scss'

function Servicii() {
  return (
    <div className='service'>
        {Service.map((item, index) => {
          return (
            <Card key={index} image={item.image} title={item.title}/>
          )
        })}
    </div>
  )
}

export default Servicii