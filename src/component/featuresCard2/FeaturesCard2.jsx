import React from "react";
import "./featuresCard2.css";

const FeaturesCard2 = ({ title, text }) => (
  <div className="features-feature">
    <div className="features-feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="features-feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default FeaturesCard2;
