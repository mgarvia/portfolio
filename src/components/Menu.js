import React from 'react';
import '../stylesheets/Menu.scss'

const Menu = () => {
  return (
    <div className="Menu">
      <div className="Menu__hamburguer">
        <button className="toggleMenu hamburger" type="button" >
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </button>
      </div>
      <nav>
        <ul className="Menu__links">
          <li className="toggleMenu Menu__links--projects" ><a className="smoothScroll" href="#Projects">Proyects</a></li>
          <li className="toggleMenu Menu__links--about" ><a className="smoothScroll" href="#About">About</a></li>
          <li className="toggleMenu Menu__links--cv" ><a className="smoothScroll" href="#CV">CV</a></li>
          <li className="toggleMenu Menu__links--contact" ><a className="smoothScroll" href="#Contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu;