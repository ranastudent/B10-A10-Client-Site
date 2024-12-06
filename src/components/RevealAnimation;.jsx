import React from 'react';
import { Fade } from 'react-awesome-reveal';
import OurMission from './OurMission';

const RevealAnimation = () => {
  return (
    <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Reveal Animation</h2>
      <Fade>
        <p>Reval Animation</p>
      </Fade>
    </div>
  );
};

export default RevealAnimation;
