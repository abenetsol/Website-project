// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
//import Slider from "react-slick";
import header from '../assets/images/header.png'
import letter from '../assets/images/letter.png'
import draw from '../assets/images/draw.png'
import './Carousel.css';

const GallerySliders = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  const imagesToDisplay = [
    images[currentImageIndex],
    images[(currentImageIndex + 1) % images.length],
    images[(currentImageIndex + 2) % images.length],
  ];

  return (
    <div className="carousel-container">
      <div className="carousel-images">
        {imagesToDisplay.map((image, index) => (
          <div key={index} className="carousel-image">
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button className="carousel-control" onClick={prevImage}>
          <i className="fas fa-chevron-left" />
        </button>
        <button className="carousel-control" onClick={nextImage}>
          <i className="fas fa-chevron-right" />
        </button>
      </div>
    </div>
  );
};
// import "./gallery.css"
// const GallerySliders = ({ images }) => {
//   const [currentImage, setCurrentImage] = React.useState(0);
//   const handlePrevImage = () => {
//     const prevImage = currentImage - 1;
//     setCurrentImage(prevImage);
//   };
//   const handleNextImage = () => {
//     const nextImage = currentImage + 1;
//     setCurrentImage(nextImage);
//   };

//   return (
//     <div class='gallary'>
//       <button onClick={handlePrevImage}>prev</button>
//       <img src={images[currentImage]} alt="Gallery image" />
//       <button onClick={handleNextImage}>Next</button>
//     </div>
//   );
// };

export default GallerySliders;