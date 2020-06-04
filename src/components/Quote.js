import React from 'react';
import '../stylesheets/Quote.scss'

const Quote = props => {
  const {icon, quote, bgUrl, children, flex, customClass, id} = props;
  return(
    <article className={`Quote Quote__${flex} Quote__${customClass}`} id={id} style={{background:`url(${bgUrl}) center no-repeat`, backgroundSize:"cover", backgroundAttachment: "fixed"}}>
      {/* <h3>I</h3> */}
      <img src={icon}/>
      {/* <h3 className="work">Work hard,</h3> 
      <h3 className="coffee">Have a coffee,</h3> 
      <h3 className="code">Enjoy coding!</h3> */}
      <h3>{quote}</h3>
      {children}
    </article>
  )
}

export default Quote;