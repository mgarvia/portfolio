import React from 'react';
import Menu from './Menu';

import '../stylesheets/Header.scss'

const Header = () => {
  return (
    <header className="Header">
      <Menu />
      <div className="Header__content">
        <div className="aloha">
          <h2>
            <div className="aloha-a">A</div>
            <div className="aloha-l">l</div>
            <div className="aloha-o">o</div>
            <div className="aloha-h">h</div>
            <div className="aloha-a">a</div>
            <div className="aloha-ex">!</div>
          </h2>
        </div>
        <div className="text">
          <h1>
            <div className="text__welcome--box">
              <p className="text__welcome typing"><span className="text__mery">I'm Mery</span>, <span className="text__front">front-en developer</span>
              </p>
              <p className="text__junior">junior </p>
            </div>
          </h1>
          <div className="text__description css-typing">
            <p className="typing">Working hard to become the most experienced developer ever!</p>
            <p className="typing">Meanwhile, I'm just the most enthusiastic, commited and full of energy hardworker you'll probably want to have in your team ;)</p>
            <p className="typing">Have a look to my portfolio and lets code together!</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;

// https://codepen.io/nxworld/pen/OyRrGy