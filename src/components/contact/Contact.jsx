import React from 'react';
import './contact.css';

import { FaFacebookF , FaTwitter , FaWhatsapp } from "react-icons/fa";


function Contact() {
  return (
    <div className="contact container" id='contact'>

      <h2 className="special-heading">
        Contact
      </h2>

      <p>Velit et sea diam euismod et lorem id assum nulla takimata.</p>

      <div className="info-contact">

          <p className="label">Feel free to drop us a line at:</p>

          <a href="mailto:alaaelsayedcs@gmail.com.com?subject=Contact" class="link">alaaelsayedcs@gmail.com</a>

          <div className="social">
            <h1>Find Us On Social Networks</h1>
            <div className="icon">
              <i className='face'>{<FaFacebookF />}</i>
              <i className='twit'>{<FaTwitter />}</i>
              <i className='sapp'>{<FaWhatsapp />}</i>
            </div>
          </div>
      </div>
      
    </div>
  )
}

export default Contact;
