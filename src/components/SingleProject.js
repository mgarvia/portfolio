import React from 'react';

const SingleProject = props => {
  const { title, subtitle, web, code, tags, image, color, description } = props; const setBgColor = () => {
    const arts = document.querySelectorAll('.Projects__grid--item').forEach(project => project.style.background = { color })
  }



  setBgColor();

  return (
    <article className="SingleProject" style={{ background: `${color}` }}>
      <img className="SingleProject__image" src={image} alt={title} />
      <div className="SingleProject__info" >
        <i class="fas fa-sort-down"></i>
        <h2 className="SingleProject__title">{title}</h2>
        <h3 className="SingleProject__subtitle">{subtitle}</h3>
        <p className="SingleProject__description">{description}</p>
        <div className="SingleProject__links">
          <a href={web} target="blank" title="Click to visit the web">Visit the web</a>
          <a href={code} target="blank" title="Click to check the code">Check the code</a>
        </div>
        <div className="SingleProject__tags">
          {tags.map((tag, index) =>
            <i className={`fab fa-${tag}`} key={index}></i>
          )}
        </div>
      </div>

    </article>
  )
}

export default SingleProject;