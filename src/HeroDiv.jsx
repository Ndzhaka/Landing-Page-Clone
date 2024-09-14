import React from 'react';

const HeroDiv = ({ className = '', children, style = {} }) => {
  const defaultStyles = {
    backgroundColor: '#f0f0f0',
    marginTop:'0px', 
    padding: '10px',  
    marginBottom:'0px',          
    borderRadius: '10px',        
    border: '1px solid #ccc',    
    ...style                     
  };

  return (
    <div className={`hero-div ${className}`} style={defaultStyles}>
      {children}
    </div>
  );
};

export default HeroDiv;
