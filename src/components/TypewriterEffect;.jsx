import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TypewriterEffect = () => {
  return (
    <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Typewriter Effect</h2>
      <Typewriter
        words={['Welcome to our Crowdfunding Platform!', 'Empower your dreams!', 'Join us today!']}
        loop={5}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </div>
  );
};

export default TypewriterEffect;
