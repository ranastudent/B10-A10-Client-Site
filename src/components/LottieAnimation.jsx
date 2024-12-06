import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../animations/animation.json';

const LottieAnimation = () => {
  return (
    <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Lottie Animation</h2>
      <Lottie animationData={animationData} loop={true} />>
    </div>
  );
};

export default LottieAnimation;
