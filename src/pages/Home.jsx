import React from 'react';
import BannerSlider from '../components/BannerSlider';
import RunningCampaign from '../components/RunningCampaign';
import OurMission from '../components/OurMission';
import Partner from '../components/Partner';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <div className='space-y-1'>
      <div className='typewriter-container mt-2'>
        <Typewriter
          words={['Welcome to our Crowdfunding Platform!', 'Empower your dreams!', 'Join us today!']}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
      <BannerSlider />
      <RunningCampaign />
      <OurMission />
      <Partner />
    </div>
  );
};

export default Home;
