import "./header.css";

import { images } from '../../constants';

const Header = () => {
return (

  <div className="header container"  id='home'>

    <div className="header-content">
      
      <h1 className="gradient-text">
      Let&apos;s Build Something amazing ..
      </h1>

      <p>
        Nonummy dolor voluptua diam dolore diam et diam. Qui sanctus no vero dolor magna id dolore sit est nonumy amet magna iusto esse illum nonumy. 
      </p>

      <div className="input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="people">
        <img src={images.people} alt="people"/>
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="header-image">
      <img src={images.ai} alt="img" />
    </div>

  </div>
)
}

export default Header
