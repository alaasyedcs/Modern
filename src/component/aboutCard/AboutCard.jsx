import React from 'react';


function aboutCard({ icon, title, text, }) {
  return (
    <div className="aboutCard">

      <div className="iconCard">
        <div className="aboutIcon">
          <i>{icon}</i>
        </div>
      </div>

      <div className="infoCard">
        <div className="aboutTitle">
          <h1>{title}</h1>
        </div>
        <div className="aboutText">
          <p>{text}</p>
        </div>
      </div>

    </div>
  )
}

export default aboutCard;
