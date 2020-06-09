import React from 'react';
import '../stylesheets/Menu.scss'

const Menu = props => {
  const { language, updateLanguage } = props;
  const toggleLanguage = e => {
    document.querySelectorAll('.Menu__language--button').forEach(btn => btn.classList.remove('is-active'));
    e.currentTarget.classList.add('is-active');
    updateLanguage(e.currentTarget.innerHTML)
    console.log(e.currentTarget.innerHTML)
  }

  return (
    <div className="Menu">
      <div className="Menu__language">
        <button className="Menu__language--button btn-ES" type="button" onClick={toggleLanguage}>ES</button>
        <button className="Menu__language--button btn-EN" type="button" onClick={toggleLanguage}>EN</button>
      </div>
      <div className="Menu__hamburguer">
        <button className="toggleMenu hamburger" type="button" >
          <div className="hamburger-box">
            <div className="hamburger-inner"></div>
          </div>
        </button>
      </div>
      <nav>
        {language === "EN"
          ? <ul className="Menu__links">
            <li className="toggleMenu Menu__links--projects" ><a className="smoothScroll" href="#Projects">Projects</a></li>
            <li className="toggleMenu Menu__links--about" ><a className="smoothScroll" href="#About">About</a></li>
            <li className="toggleMenu Menu__links--cv" ><a className="smoothScroll" href="#CV">CV</a></li>
            <li className="toggleMenu Menu__links--contact" ><a className="smoothScroll" href="#Contact">Contact</a></li>
          </ul>
          : <ul className="Menu__links">
            <li className="toggleMenu Menu__links--projects" ><a className="smoothScroll" href="#Projects">Proyectos</a></li>
            <li className="toggleMenu Menu__links--about" ><a className="smoothScroll" href="#About">Sobre mí</a></li>
            <li className="toggleMenu Menu__links--cv" ><a className="smoothScroll" href="#CV">CV</a></li>
            <li className="toggleMenu Menu__links--contact" ><a className="smoothScroll" href="#Contact">Contacto</a></li>
          </ul>
        }
      </nav>
    </div>
  )
}

export default Menu;