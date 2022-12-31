import React from 'react';
import './featuresOne.css';
import { FeaturesCard1 } from '../../component';
import { images } from '../../constants';

function FeaturesOne() {
  return (
    <div className="features container" id='cloud'>
      
      <div className="special-heading">
        Cloud Platform
      </div>

      <p>If you do it right, it will last forever.</p>

      <div className="features-content flex-center">

        <div className="card">
            <FeaturesCard1
            img={images.portfolio1}
            title="ONE"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
            />
          </div>

          <div className="card">
            <FeaturesCard1
            img={images.portfolio2}
            title="TWO"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
            />
          </div>

          <div className="card">
            <FeaturesCard1
            img={images.portfolio3}
            title="THREE"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
            />
          </div>

          <div className="card">
            <FeaturesCard1
            img={images.portfolio3}
            title="FOUR"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
            />
          </div>

          <div className="card">
            <FeaturesCard1
            img={images.portfolio1}
            title="FIVE"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
            />
          </div>

          <div className="card">
            <FeaturesCard1
            img={images.portfolio2}
            title="SIX"
            text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
            />
          </div>



      </div>

    </div>
  )
}

export default FeaturesOne;
