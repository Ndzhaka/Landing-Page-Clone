import React from 'react';
import SignupButton from './SignupButton'; 
import HeroDiv from './HeroDiv';
import './DivComponent.css';



const DivComponent = () => {
  return (

      <HeroDiv style={{ backgroundColor: 'white', padding: '20px',border:'none' ,  }}>
        
         <div className="div-container">
      <SignupButton style={{ backgroundColor: 'white', color: 'rgb(13, 12, 34)', fontSize: '7px', padding:'8px 10px',border: '1px solid rgba(3, 2, 24, 0.105)' }}>
        <span className='glow'>New</span> How Monobank uses Bridge to power their growth
      </SignupButton>

      <h1 className="cta-header">Build customer
relationship in
a flexible way</h1>

      <p className="cta-text">
      Powerful, flexible and data-driven, Bridge makes it
      easy to build the exact CRM your business needs.

      </p>
      </div>
      </HeroDiv>

    
  );
};

export default DivComponent;
