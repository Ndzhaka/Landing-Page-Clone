import React from 'react';
import HeroDiv from './HeroDiv'; 
import './CTAdiv2.css';
const NewComponent = () => {
  return (
    <div>
  
      <HeroDiv style={{ backgroundColor: 'rgb(13, 12, 34)', padding: '0px  30px', marginTop: '0' }}>
        <p className="cta-text2">
          Open Bridge for free <span className="arrow">&gt;</span>
        </p>
      </HeroDiv>
    </div>
  );
};

export default NewComponent;
