import React from 'react';
import HeroDiv from './HeroDiv'; 
import DivComponent from './DivComponent'; 
import CTADiv from './CTAdiv2'; 
import ImageDiv from './ImageDiv'; 
import Footer from './Footer'; 
import './FinalHero.css';

const FinalHero = () => {
  return (
    <div>
      <div className="final-hero">
        <div className="text-container">
          <DivComponent>
            {/* Content for DivComponent */}
          </DivComponent>

          <CTADiv>
            {/* Content for CTADiv */}
          </CTADiv>
        </div>

        {/* ImageDiv */}
        <ImageDiv imageSrc="./HeroImg.jpg" altText="Example Image" />
      </div>
      
      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default FinalHero;
