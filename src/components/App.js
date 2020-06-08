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
      data: data,
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
    })
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

  toggleIsActive = () => document.querySelectorAll('.hamburger, .Menu__links').forEach(item => item.classList.toggle('is-active'));

  toogleMenu = () => document.querySelectorAll('.toggleMenu').forEach(item => item.addEventListener('click', this.toggleIsActive));

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
    const { projects, filter, Html, Css, Javascript, react, Wordpress } = this.state;
    const { updateFilter, smoothScroll, toogleMenu } = this;

    smoothScroll()
    toogleMenu()

    return (
      <div className="App" >
        <Header />
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
            projects={projects}
            filter={filter}
            updateFilter={updateFilter}
            html={Html}
            css={Css}
            js={Javascript}
            react={react}
            wp={Wordpress}
          />
          <About />
          <Quote
            id={'CV'}
            bgUrl={"http://localhost:3000//images/Trabajo-en-equipo.jpg"}
            flex={'column'}
            colorTitle={'white'}
            quote={"Why should you work with me?"}
            children={<a className="cv-download" href="http://localhost:3000//images/Maria_Garvia_CV_Frontend_Developer.pdf" download>Download my CV</a>}
          />
          <Contact />
        </main>
        <footer>
          <Footer />
        </footer>
        <ScrollBtn />
      </div>
    );
  }
}

export default App;
