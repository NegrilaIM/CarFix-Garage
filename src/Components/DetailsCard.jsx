import React from 'react'
import './Styles/DetailsCard.scss'

function DetailsCard({id, image, title, paragraph}) {
  return (
    <section className='details-card'>
          <div className={id === 2 ? "d_flex_rev" : "d_flex"}>
            <div className='img'>
            <img src={image} alt="" />
            </div>
            <div className='text'>
              <h4>{title}</h4>
              <p>{paragraph}</p>
            </div>
          </div>
    </section>
  )
}

export default DetailsCard