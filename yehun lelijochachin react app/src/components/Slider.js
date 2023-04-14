import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import header from '../assets/images/header.png'
import letter from '../assets/images/letter.png'
import draw from '../assets/images/draw.png'
import "./slider.css"
const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src={header} onDragStart={handleDragStart} role="presentation" />,
  <img src={letter}onDragStart={handleDragStart} role="presentation" />,
  <img src={draw} onDragStart={handleDragStart} role="presentation" />,
];

const Slider = () => {
  return (
    <div className='size'>
        <AliceCarousel mouseTracking items={items} />
 
    </div>
    
  );
}
export default Slider;