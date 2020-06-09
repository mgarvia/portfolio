import React from 'react';
import '../stylesheets/Footer.scss'

const Footer = props => {
  const { language } = props;

  return (
    <div className="Footer">
      {language === "EN"
        ? "Created by Mawii "
        : "Creada por Mawii "
      }
      <img className="mawii" alt="Mawii" src="./images/mawii.png" />
    </div>
  )
}

export default Footer;