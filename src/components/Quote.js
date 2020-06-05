import React from 'react';
import '../stylesheets/Quote.scss'

const Quote = props => {
  const {id, bgUrl, flex, colorTitle, quote, children} = props;
  return(
    <article id={id} className={`Quote Quote__${id}`}  style={{background:`url(${bgUrl}) center no-repeat`, backgroundSize:"cover", backgroundAttachment: "fixed", flexDirection: `${flex}`}}>
      <h3 className="Quote__title" style={{color:`${colorTitle}`}}>{quote}</h3>
      {children}
    </article>
  )
}

export default Quote;