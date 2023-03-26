import React from 'react';
import Slider1 from '../Assets/Slider-1.jpg'
import Slider2 from '../Assets/Slider-2.jpg'
import Slider3 from '../Assets/Slider-3.jpg'
import './Styles/Carousel.scss'
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Carousel() {
  return (
    <MDBCarousel>
      <MDBCarouselItem
        className='w-100 height d-block'
        itemId={1}
        src={Slider1}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 height d-block'
        itemId={2}
        src={Slider2}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 height d-block'
        itemId={3}
        src={Slider3}
        alt='...'
      />
    </MDBCarousel>
  );
}