import React from 'react';
import '../stylesheets/CvItem.scss';

const CvItem = props => {
  const {name, subtitle, titleHover, description, icon, type } = props;

  return (
    <div className="CvItem">
      <i className={`fas fa-${icon}`}></i>
      <h3 className={type}>{name}</h3>
      <span>{subtitle}</span>
      <div className="CvItem--hover">
        <p className={type}>{titleHover}</p>
        <span>{description}</span>
      </div>
    </div>

  )
}

export default CvItem;