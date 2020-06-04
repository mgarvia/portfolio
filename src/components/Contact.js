import React, { useEffect } from 'react';
import '../stylesheets/Contact.scss'

const Contact = () => {

  return (
    <div className="Contact" id="Contact">
      <div className="About__header section__header">
        <h2 className="section__header--title">Lets' talk</h2>
      </div>
      {/* <div className="circles">
        <div></div>
        <div></div>
        <div></div>
      </div> */}
      {/* <div>
        <a>Linkedin</a>
        <a>Github</a>
        <a>Twitter</a>
        <a>Phone</a>
        <a>Email</a>
      </div> */}
      {/* <div id='intro'>
    Hover over links. 4 different color schemes. Which one do you like?
  </div> */}
  <div id='contact-info'>
    <div className='links'>
      <a href='https://www.linkedin.com/in/mariagarviasoler/' target='_blank' >
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>
                <i className="fab fa-linkedin-in"></i>
              </span>
        </div>
      </a>
      <a href='https://github.com/mgarvia' target='_blank'>
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>
                <i className="fab fa-github"></i>
              </span>

        </div>
      </a>
      <a href='https://twitter.com/m_garvia' target='_blank'>
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>
                <i className="fab fa-twitter"></i>
              </span>
        </div>
      </a>
      <a href='mailto:maria.garvia.soler@gmail.com' target='_blank'>
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>
          <i className="fas fa-envelope"></i>
              </span>
        </div>
      </a>
      <a href='tel:689-462-156' target='_blank'>
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span>
          <i className="fas fa-phone-alt"></i>
              </span>
        </div>
      </a>
    </div>
  </div>
    </div>
  )
}

export default Contact;