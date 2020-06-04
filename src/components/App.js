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
      filter: [],
      Html: false,
      Css: false,
      Javascript: false,
      react: false,
      Wordpress: false,
    }
  }

  componentDidMount = () => {
    this.setState({
      filter: ["html5", "css3-alt", "js-square", "react", "wordpress-simple"]
    })
  }

  updateProjects = item => {
    const { projects, filter } = this.state

    const showProjects = projects.filter(project => project.Tags.includes(item.id));

    console.log(item.id)
    console.log(showProjects)

    if (!item.classList.contains('is-active')) {
      console.log('no')
    }

  }

  // updateFilter = item => {
  //   const { filter } = this.state;
  //   const itemIndex = filter.findIndex(tag => tag === item.id);

  //   if (item.innerHTML === "All") {
  //     this.setState({
  //       filter: ["html5", "css3-alt", "js-square", "react", "wordpress-simple"]
  //     })
  //   } else {
  //     if (filter.length === 5 && !item.classList.contains('is-active')) {
  //       this.setState({
  //         filter: [item.id]
  //       })
  //     } else if (filter.findIndex(tag => tag === item.id) === -1) {
  //       this.setState(prev => ({
  //         ...prev,
  //         filter: [...prev.filter, item.id]
  //       }))
  //     } else if (item.classList.contains('is-active')) {
  //       const tagIndex = filter.findIndex(tag => tag === item.id);
  //       const newFilter = filter.splice(tagIndex, 1);
  //       this.setState({
  //         filter: filter
  //       })
  //     }
  //     if (!filter.length) {
  //       this.setState({
  //         filter: ["html5", "css3-alt", "js-square", "react", "wordpress-simple"]
  //       })
  //       document.querySelector('.filter-item-all').classList.add('is-active')
  //     }
  //   }
  // }

  updateFilter = item => {
    const { filter } = this.state;
    // const itemIndex = filter.findIndex(tag => tag === item.id);

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
      // if (item.classList.contains('is-active')) {
      //   this.setState({
      //     [item.innerHTML]: false
      //   })
      // } else {
      this.setState({
        [item.innerHTML]: true
      })
      // }
      // } else if (filter.findIndex(tag => tag === item.id) === -1) {
      //   this.setState(prev => ({
      //     ...prev,
      //     filter: [...prev.filter, item.id]
      //   }))
      // } else if (item.classList.contains('is-active')) {
      //   const tagIndex = filter.findIndex(tag => tag === item.id);
      //   const newFilter = filter.splice(tagIndex, 1);
      //   this.setState({
      //     filter: filter
      //   })
      // }
      // if (!filter.length) {
      //   this.setState({
      //     filter: ["html5", "css3-alt", "js-square", "react", "wordpress-simple"]
      //   })
      //   document.querySelector('.filter-item-all').classList.add('is-active')
      // }
    }
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

  render() {
    // console.log(data)
    const { projects, filter, Html, Css, Javascript, react, Wordpress } = this.state;
    const { updateFilter, smoothScroll } = this;

    smoothScroll()

    return (
      <div className="App" >
        <ScrollBtn />
        <Header />
        <main>
          <Quote
            id={'love-coding'}
            icon={"https://media.giphy.com/media/LpDmM2wSt6Hm5fKJVa/giphy.gif"}
            quote={"Coding"}
            bgUrl={"https://images.unsplash.com/photo-1589561253898-768105ca91a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80"}
            flex={'row'}
            customClass={'love'}
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
            quote={"Why should you work with me?"}
            children={<a className="cv" href="http://localhost:3000//images/Maria_Garvia_CV_Frontend_Developer.pdf" download>Download my CV</a>}
            flex={'column'}
            customClass={'cv'}
          />
          <Contact />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
