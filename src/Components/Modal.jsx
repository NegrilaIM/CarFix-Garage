import React from 'react'
import './Styles/Modal.scss'

function Modal({open, onClose, image, title, desc1, desc2, desc3, desc4}) {
  if(!open) return null
  return (
    <>
    <div className='modal_overlay' onClick={onClose} />
    <div className='modal_style'>
      <div  className='modal_header'>
        <img src={image} alt="" />
        <h4>{title}</h4>
      </div>
      <div className='modal_description'>
        <ul>
          <li>{desc1}</li>
          <li>{desc2}</li>
          <li>{desc3}</li>
          <li>{desc4}</li>
        </ul>
        <button onClick={onClose}>Inapoi</button>
      </div>
    </div>
    </>
  )
}

export default Modal