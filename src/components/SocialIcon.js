import React from 'react';

const SocialIcon = props => {
  const {link, icon} = props;
  return (
    <a href={link} target='_blank' rel="noopener noreferrer" >
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span>
          <i className={icon}></i>
        </span>
      </div>
    </a>
  )
}

export default SocialIcon;