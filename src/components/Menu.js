import React from 'react';
import '../stylesheets/Menu.scss'

const Menu = () => {

  const toggleIsActive = () => document.querySelectorAll('.hamburger, .Menu__links').forEach(item => item.classList.toggle('is-active'));

  return (
    <div className="Menu">
      <div className="Menu__hamburguer">
        <button className="hamburger" type="button" onClick={toggleIsActive}>
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </button>
      </div>
      <nav >
        <ul className="Menu__links">
          <li className="Menu__links--projects" onClick={toggleIsActive}><a href="http://localhost:3000/#Projects">Proyects</a></li>
          <li className="Menu__links--about" onClick={toggleIsActive}><a href="http://localhost:3000/#About">About</a></li>
          <li className="Menu__links--cv" onClick={toggleIsActive}><a href="http://localhost:3000/#CV">CV</a></li>
          <li className="Menu__links--contact" onClick={toggleIsActive}><a href="http://localhost:3000/#Contact">Call me</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu;