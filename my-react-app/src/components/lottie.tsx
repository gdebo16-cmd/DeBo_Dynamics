import React from 'react';
import { Lottie } from 'lottie-react';

// Check your console! If this says 'undefined', the file path is wrong.
import animationData from '../animations/Purple-bubble.json';

console.log("Lottie Data Loaded:", animationData);

const LottieBackground: React.FC = () => {
  return (
    <div style={{ 
      width: '100%', 
      height: '100vh',
      backgroundColor: 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default LottieBackground;