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
    setTimeout(this.updateLanguageBtn, 1000)
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

  updateLanguage = language => this.setState({ language: language })

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

  render() {
    const { projects, filter, Html, Css, Javascript, react, Wordpress, language } = this.state;
    const { updateLanguage, updateFilter, smoothScroll, toogleMenu } = this;

    smoothScroll()
    toogleMenu()

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
              quote={"Why should you work with me?"}
              children={<a className="cv-download" href="http://localhost:3000//images/Maria_Garvia_CV_Frontend_Developer(EN).pdf" download>Download my CV</a>}
            />
            : <Quote
              id={'CV'}
              bgUrl={"https://mgarvia.github.io/portfolio/images/Trabajo-en-equipo.jpg"}
              flex={'column'}
              colorTitle={'white'}
              quote={"¿Por qué trabajar conmigo?"}
              children={<a className="cv-download" href="http://localhost:3000//images/Maria_Garvia_CV_Frontend_Developer(ES).pdf" download>Descarga mi CV</a>}
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
