import React from 'react';


const FeaturesCard1 = ({ img, title, text, }) => {
  return (
    <div className="AboutCard2">
    <div className="aboutCard">
      <div className="imgCard">
          <div className="aboutImg">
            <img src={img} alt="blog_image" />
          </div>
      </div>

      <div className="infoCard">
        <div className="aboutTitle">
          <h3>{title}</h3>
        </div>
        <div className="aboutText">
          <p>{text}</p>
        </div>
      </div>
    </div>
    </div>
  )
};

export default FeaturesCard1;
