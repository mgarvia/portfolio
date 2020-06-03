import React from 'react';
import SingleProject from './SingleProject';
import '../stylesheets/Projects.scss';
// import projects from '../data.json';

const Projects = props => {
  const { projects, updateFilter, html, css, js, react, wp } = props;
  const toggleIsActive = () => document.querySelector('.Projects__header--filter').classList.toggle('is-active');

  const getValue = e => {
    const filters = document.querySelectorAll('.filter-item');
    // updateFilter(e.currentTarget.innerHTML)
    updateFilter(e.currentTarget)

    // if(e.currentTarget.innerHTML === "All") {
    //   filters.forEach(item => item.classList.remove('is-active'))
    //   e.currentTarget.classList.add('is-active')
    // } else {
    //   if (!e.currentTarget.classList.contains('is-active'))
    //   document.querySelector('.filter-item-all').classList.remove('is-active')
    //   e.currentTarget.classList.toggle('is-active')
    // }

    // if(e.currentTarget.innerHTML !== "All") {

    // }

    filters.forEach(item => item.classList.remove('is-active'))
    e.currentTarget.classList.add('is-active')
    // if (e.currentTarget.innerHTML === "All") {

      
    // } else {
    //   if (!e.currentTarget.classList.contains('is-active'))
    //     document.querySelector('.filter-item-all').classList.remove('is-active')
    //   e.currentTarget.classList.toggle('is-active')
    // }

  }

  return (
    <section className="Projects" id="Projects">
      <div className="Projects__header section__header">
        <div>
          <h2 className="section__header--title">Projects</h2>
          <i className="fas fa-filter" onClick={toggleIsActive}></i>
        </div>
        <nav>
          <ul className="Projects__header--filter">
            <li className="filter-item filter-item-all is-active" id="filter-all" onClick={getValue}>All</li>
            <li className="filter-item" id="html5" onClick={getValue}>Html</li>
            <li className="filter-item" id="css3-alt" onClick={getValue}>Css</li>
            <li className="filter-item" id="js-square" onClick={getValue}>Javascript</li>
            <li className="filter-item" id="react" onClick={getValue}>react</li>
            <li className="filter-item" id="wordpress-simple" onClick={getValue}>Wordpress</li>
          </ul>
        </nav>
      </div>
      <div className="Projects__grid">
        {projects
          .filter(obj => html ? obj.Tags.find(tag => tag === "html5") : obj)
          .filter(obj => css ? obj.Tags.find(tag => tag === "css3-alt") : obj)
          .filter(obj => js ? obj.Tags.find(tag => tag === "js-square") : obj)
          .filter(obj => react ? obj.Tags.find(tag => tag === "react") : obj)
          .filter(obj => wp ? obj.Tags.find(tag => tag === "wordpress-simple") : obj)
          .map((obj, index) =>
            <SingleProject
              key={index}
              title={obj.Title}
              web={obj.Web}
              code={obj.Code}
              image={obj.Image}
              tags={obj.Tags}
              color={obj.Color}
            />
          )}
      </div>
    </section>
  )
}

export default Projects;

// {
  //   "Title": "Guess the number",
  //   "Web": "http://beta.adalab.es/modulo-2-evaluacion-intermedia-mgarvia/",
  //   "Code": "https://github.com/mgarvia/modulo-2-evaluacion-intermedia-mgarvia",
  //   "Image": "",
  //   "Tags" : ["HTML", "CSS", "Javascript"]
  // },
  // {
  //   "Title": "Portfolio",
  //   "Web": "",
  //   "Code": "https://github.com/mgarvia/portfolio",
  //   "Image": "",
  //   "Tags" : ["HTML", "CSS", "Javascript", "React"]
  // },
  // {
  //   "Title": "CRUD",
  //   "Web": "",
  //   "Code": "https://github.com/mgarvia/cecotec-Proceso-de-seleccion-Front-End-Developer",
  //   "Image": "",
  //   "Tags" : ["HTML", "CSS", "Javascript", "React"]
  // },
  // {
  //   "Title": "Gestor de proyectos",
  //   "Web": "",
  //   "Code": "https://github.com/mgarvia/gestor-de-proyectos",
  //   "Image": "",
  //   "Tags" : ["HTML", "CSS", "Javascript"]
  // },