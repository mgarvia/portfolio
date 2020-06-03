import React from 'react';

const SingleProject = props => {
  const { tags, title, image, web, code } = props;
  return (
    <article className={`Projects__grid--item ${tags}`}>
      <img className="SingleProject__image" src={image} />
      <h3 className="SingleProject__title">{title}</h3>
      <div className="SingleProject__links">
        <a href={web} title="Visit the website">Visit the website</a>
        <a href={code} title="Check the code">Check the code</a>
      </div>
      <div className="SingleProject__tags">
        {tags.map(tag =>
          <i class={`fab fa-${tag}`}></i>
        )}
      </div>

    </article>
  )
}

export default SingleProject;