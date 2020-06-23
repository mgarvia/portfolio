import React from 'react';
import Header from './Header';
import Projects from './Projects';
import Quote from './Quote';
import About from './About';
import Contact from './Contact';
import ScrollBtn from './ScrollBtn';
import Footer from './Footer';
import data from '../data.json';

import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "EN",
      projects: data,
      Html: false,
      Css: false,
      Javascript: false,
      react: false,
      Wordpress: false,
    }
  }

  componentDidMount = () => {
    this.setState({
      Html: false,
      Css: false,
      Javascript: false,
      react: false,
      Wordpress: false,
    });
    if (window.navigator.language === "es-ES") {
      this.setState({
        language: "ES"
      })
    } else {
      this.setState({
        language: "EN"
      })
    }
    setTimeout(this.updateLanguageBtn, 1000);
    this.loveTyping();
  }

  smoothScroll = () => {
    let buttons = document.querySelectorAll('.smoothScroll');
    buttons.forEach((button) => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.currentTarget.getAttribute('href');

        document.querySelector(target).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }

  updateLanguageBtn = () => this.state.language === "ES" ? document.querySelector('.btn-ES').classList.add('is-active') : document.querySelector('.btn-EN').classList.add('is-active');

  toggleIsActive = () => document.querySelectorAll('.hamburger, .Menu__links').forEach(item => item.classList.toggle('is-active'));

  toogleMenu = () => document.querySelectorAll('.toggleMenu').forEach(item => item.addEventListener('click', this.toggleIsActive));

  updateLanguage = language => this.setState({ language: language });

  updateFilter = item => {
    if (item.innerHTML === "All") {
      this.setState({
        Html: false,
        Css: false,
        Javascript: false,
        react: false,
        Wordpress: false,
      })
    } else {
      this.setState({
        Html: false,
        Css: false,
        Javascript: false,
        react: false,
        Wordpress: false,
      })
      this.setState({
        [item.innerHTML]: true
      })
    }
  }

  loveTyping = () => {
    let TxtRotate = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };
    TxtRotate.prototype.tick = function () {
      const i = this.loopNum % this.toRotate.length;
      const fullTxt = this.toRotate[i];
  
      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
      this.el.innerHTML = '<span class="wrap"> ' + this.txt + '</span>';
  
      const that = this;
      let delta = 300 - Math.random() * 100;
  
      if (this.isDeleting) { delta /= 2; }
  
      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }
  
      setTimeout(function () {
        that.tick();
      }, delta);
    };
    
    if (this.state.language === "EN") {
      const elements = document.querySelectorAll('.txt-rotate-EN');
      for (let element of elements) {
        const toRotate = element.getAttribute('data-rotate');
        const period = element.getAttribute('data-period');
        if (toRotate) {
          new TxtRotate(element, JSON.parse(toRotate), period);
        }
      }
    } else {
      const elements = document.querySelectorAll('.txt-rotate-ES');
      for (let element of elements) {
        const toRotate = element.getAttribute('data-rotate');
        const period = element.getAttribute('data-period');
        if (toRotate) {
          new TxtRotate(element, JSON.parse(toRotate), period);
        }
      }
    }

    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };

  render() {
    const { projects, filter, Html, Css, Javascript, react, Wordpress, language } = this.state;
    const { updateLanguage, updateFilter, smoothScroll, toogleMenu } = this;

    smoothScroll()
    toogleMenu()
    // this.loveTyping()

    return (
      <div className="App" >
        <Header
          language={language}
          updateLanguage={updateLanguage}
        />
        <main>
          <Quote
            id={'love-coding'}
            bgUrl={"https://images.unsplash.com/photo-1589561253898-768105ca91a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80"}
            flex={'row-reverse'}
            colorTitle={'red'}
            quote={"Coding"}
            children={
              <div className="icon" src="https://media.giphy.com/media/LpDmM2wSt6Hm5fKJVa/giphy.gif"></div>
            }
          />
          <Projects
            language={language}
            projects={projects}
            filter={filter}
            updateFilter={updateFilter}
            html={Html}
            css={Css}
            js={Javascript}
            react={react}
            wp={Wordpress}
          />
          <About
            language={language}
          />

          {language === "EN"
            ? <Quote
              id={'CV'}
              bgUrl={"https://mgarvia.github.io/portfolio/images/Trabajo-en-equipo.jpg"}
              flex={'column'}
              colorTitle={'white'}
              quote={"Work with me"}
              children={<a className="cv-download" href="https://mgarvia.github.io/portfolio/images/Maria_Garvia_CV_Frontend_Developer(EN).pdf" download>Download my CV</a>}
            />
            : <Quote
              id={'CV'}
              bgUrl={"https://mgarvia.github.io/portfolio/images/Trabajo-en-equipo.jpg"}
              flex={'column'}
              colorTitle={'white'}
              quote={"Trabaja conmigo"}
              children={<a className="cv-download" href="https://mgarvia.github.io/portfolio/images/Maria_Garvia_CV_Frontend_Developer(ES).pdf" download>Descarga mi CV</a>}
            />
          }
          <Contact
            language={language}
          />
        </main>
        <footer>
          <Footer
            language={language}
          />
        </footer>
        <ScrollBtn />
      </div>
    );
  }
}

export default App;
