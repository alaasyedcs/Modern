import React from 'react'
import { FeaturesCard2 } from '../../component';
import "./featuresTwo.css";

const FeatureTwo = () => {
  return (
  <div className="featureTwo container" id="case">
    
    <div className="featureTwo-feature">
  <FeaturesCard2
        title="What is GPT-3"
        text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
      />
    </div>

    <div className="featureTwo-heading">
      <h1 className="gradient-text">
              The possibilities are beyond your imagination
      </h1>
      <p>Explore the Library</p>
    </div>

    <div className="featureTwo-features">

    <FeaturesCard2
        title="Chatbots"
        text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
      />

      <FeaturesCard2
        title="Knowledgebase"
        text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
      />

      <FeaturesCard2
        title="Education"
        text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
      />

    </div>

  </div>
  )
}

export default FeatureTwo;
