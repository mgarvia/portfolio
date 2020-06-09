import React from 'react';
import Menu from './Menu';

import '../stylesheets/Header.scss'

const Header = props => {
  const { language, updateLanguage } = props;
  return (
    <header className="Header" id="Aloha">
      <Menu
        language={language}
        updateLanguage={updateLanguage}
      />
      <div className="Header__content">
        <div className="aloha">
          <h2>
            <span className="aloha-a">A</span>
            <span className="aloha-l">l</span>
            <span className="aloha-o">o</span>
            <span className="aloha-h">h</span>
            <span className="aloha-a">a</span>
            <span className="aloha-ex">!</span>
          </h2>
        </div>
        <div className="text">
          <h1>
            <div className="text__welcome--box">
              {language === "EN"
                ? <p className="text__welcome typing">
                  <span className="text__mery">I'm Mery, </span>
                  <span className="text__front">front-en developer</span>
                </p>
                : <p className="text__welcome text__welcome--ES typing">
                  <span className="text__mery">Soy Mery, </span>
                  <span className="text__front">front-en developer</span>
                </p>
              }
              <p className="text__junior">junior </p>
            </div>
          </h1>
          {language === "EN"
            ? <div className="text__description css-typing">
              <p className="typing">Working hard to become the most experienced developer ever!</p>
              <p className="typing">Meanwhile, I'm just the most enthusiastic, commited and full of energy hardworker you'll have in your team ;)</p>
              <p className="typing">Have a look to my portfolio and lets code together!</p>
            </div>
            : <div className="text__description css-typing">
              <p className="typing text__description--ES">Trabajando duro para convertirme en la mejor programadora que hayas conocido!</p>
              <p className="typing text__description--ES">Mientras, soy la desarrolladora más trabajadora, entusiasta, comprometida y llena de energía que tendrás en tu equipo ;)</p>
              <p className="typing text__description--ES">Échale un vistazo a mi portfolio ¡y hagamos cosas increíbles juntos!</p>
            </div>
          }
        </div>
        <section className="scrollDown">
          <a className="smoothScroll" href="#Projects"><span></span>Scroll down</a>
        </section>
      </div>
    </header>
  )
}

export default Header;