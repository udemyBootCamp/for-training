import React, { useState } from 'react';
import image1 from './asset copy/image1.jpeg';
import image2 from './asset copy/image2.jpeg';
import image3 from './asset copy/image3.jpeg';

const ImageSlider = () => {
  const images = [image1, image2, image3];
  const [currentImage, setCurrentImage] = useState(0);

  const backImage = () => {
    setCurrentImage((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <button onClick={backImage}>Back</button>
      <img src={images[currentImage]} alt="Slider" />
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default ImageSlider;
