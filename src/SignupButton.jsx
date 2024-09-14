import React from 'react';
import './SignupButton.css';


const SignupButton = ({ className = '', children, style = {} }) => {
  const defaultStyles = {
    backgroundColor: 'rgb(13, 12, 34)',
    color: 'white',  
    padding: '10px 20px',        
    fontSize: '10px', 
    border: 'none',          
    ...style                    
  };

  return (
    <button className={`global-btn ${className}`} style={defaultStyles}>
      {children}
      <span>&gt;</span>
    </button>
  );
};

export default SignupButton;




