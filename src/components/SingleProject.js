import React from 'react';

const SingleProject = props => {
  const { title, web, code, tags, image, color } = props;  const setBgColor = () => {
    const arts = document.querySelectorAll('.Projects__grid--item').forEach(project => project.style.background={color})
  }
  setBgColor();

  return (
    <article className="Projects__grid--item" style={{background:`${color}`}}>
      <img className="SingleProject__image" src={image} alt={title} />
      <h3 className="SingleProject__title">{title}</h3>
      <div className="SingleProject__links">
        <a href={web} target="blank" title="Click to visit the web">Visit the web</a>
        <a href={code} target="blank" title="Click to check the code">Check the code</a>
      </div>
      <div className="SingleProject__tags">
        {tags.map((tag, index) =>
          <i className={`fab fa-${tag}`} key={index}></i>
        )}
      </div>
    </article>
  )
}

export default SingleProject;