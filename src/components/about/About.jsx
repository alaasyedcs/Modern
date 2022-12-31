import React from 'react';
import './about.css';
import { AboutCard } from '../../component';
import { FaApple, FaBtc, FaCloudsmith, FaCloudversify } from "react-icons/fa";

const About = () => {
  return (
    <div className="about container flex-center" id='about'>
      <AboutCard
        icon={<FaApple />}
        title="Quality"
        text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
      />

      <AboutCard
        icon={<FaBtc />}
        title="Price"
        text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
      />

      <AboutCard
        icon={<FaCloudsmith />}
        title="Performance"
        text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
      />

      <AboutCard
        icon={<FaCloudversify />}
        title="Cloud"
        text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
      />
    </div>
  )
};

export default About;
