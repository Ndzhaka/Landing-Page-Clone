import React from 'react';
import './ImageDiv.css'; 
const ImageDiv = ({ imageSrc, altText }) => {
  return (
    <div className="image-div">
      <img src={imageSrc} alt={altText} />
    </div>
  );
};

export default ImageDiv;
