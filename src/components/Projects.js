import React from 'react';
import SingleProject from './SingleProject';
import '../stylesheets/Projects.scss';
import data from '../data.json';

const Projects = () => {
  return (
    <section className="Projects" id="Projects">
      <div className="Projects__header">
        <h2>Projects</h2>
        <nav>
          <ul>
            <li>Todos</li>
            <li>Html & Css</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Wordpress</li>
          </ul>
        </nav>
      </div>
      <div className="Projects__grid">
        {data.map((obj, index) =>
          <SingleProject
            key={index}
            title={obj.Title}
            web={obj.Web}
            code={obj.Code}
            image={obj.Image}
            tags={obj.Tags}
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