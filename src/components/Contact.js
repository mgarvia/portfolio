import React from 'react';
import SocialIcon from './SocialIcon';
import '../stylesheets/Contact.scss'

const Contact = props => {
  const {language} = props;

  return (
    <div className="Contact" id="Contact">
      <div className="About__header section__header">
        {language === "EN"
          ? <h2 className="section__header--title">Lets' talk</h2>
          : <h2 className="section__header--title">Hablemos</h2>
        }
      </div>
      <div id='contact-info'>
        <div className='links'>
          <SocialIcon
            link={'https://www.linkedin.com/in/mariagarviasoler/'}
            icon={"fab fa-linkedin-in"}
          />
          <SocialIcon
            link={'https://github.com/mgarvia'}
            icon={"fab fa-github"}
          />
          <SocialIcon
            link={'https://twitter.com/m_garvia'}
            icon={"fab fa-twitter"}
          />
          <SocialIcon
            link={'mailto:maria.garvia.soler@gmail.com'}
            icon={"fas fa-envelope"}
          />
          <SocialIcon
            link={'tel:689-462-156'}
            icon={"fas fa-phone-alt"}
          />
        </div>
      </div>
    </div>
  )
}

export default Contact;