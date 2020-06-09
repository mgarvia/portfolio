import React from 'react';
import SingleProject from './SingleProject';
import '../stylesheets/Projects.scss';

const Projects = props => {
  const { language, projects, updateFilter, html, css, js, react, wp } = props;

  const showFilters = () => document.querySelector('.Projects__header--filter').classList.toggle('showFilters');

  const getValue = e => {
    const filters = document.querySelectorAll('.filter-item');
    updateFilter(e.currentTarget)

    filters.forEach(item => item.classList.remove('is-active'))
    e.currentTarget.classList.add('is-active')
  }

  const paintSingleProject = (obj, index) => {
    if (language === "EN") {
      return (
        <SingleProject
          language={language}
          key={index}
          title={obj.Title}
          web={obj.Web}
          code={obj.Code}
          image={obj.Image}
          tags={obj.Tags}
          color={obj.Color}
          subtitle={obj.Subtitle}
          description={obj.Description}
        />
      )

    } else {
      return (
        <SingleProject
          language={language}
          key={index}
          title={obj.Title}
          web={obj.Web}
          code={obj.Code}
          image={obj.Image}
          tags={obj.Tags}
          color={obj.Color}
          subtitle={obj.SubtitleES}
          description={obj.DescriptionES}
        />
      )
    }
  }

  return (
    <section className="Projects" id="Projects">
      <div className="Projects__header section__header">
        <div>
          {language === "EN"
            ? <h2 className="section__header--title">Projects</h2>
            : <h2 className="section__header--title">Proyectos</h2>
          }
          <i className="fas fa-filter" onClick={showFilters}></i>
        </div>
        <nav>
          <ul className="Projects__header--filter">
            {language === "EN"
              ? <li className="filter-item filter-item-all is-active" id="filter-all" onClick={getValue}>All</li>
              : <li className="filter-item filter-item-all is-active" id="filter-all" onClick={getValue}>Todos</li>

            }
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
          .map((obj, index) => paintSingleProject(obj, index)
            //     <SingleProject
            //   key={index}
            //   title={obj.Title}
            //   web={obj.Web}
            //   code={obj.Code}
            //   image={obj.Image}
            //   tags={obj.Tags}
            //   color={obj.Color}
            //   subtitle={obj.Subtitle}
            //   description={obj.Description}
            // />
          )}
      </div>
    </section>
  )
}

export default Projects;