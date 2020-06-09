import React from 'react';
import CvItem from './CvItem';
import '../stylesheets/About.scss'

const About = props => {

  const { language } = props;

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

  window.onload = function () {
    if (language === "EN") {
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

  return (
    <section className="About" id="About">
      <div className="About__icons">
        <img alt="icono react" src="https://mgarvia.github.io/portfolio/images/react.png" />
        <img alt="icono html5" src="https://mgarvia.github.io/portfolio/images/html5.png" />
        <img alt="icono css3" src="https://mgarvia.github.io/portfolio/images/css3.png" />
        <img alt="icono sass" src="https://mgarvia.github.io/portfolio/images/sass.png" />
        <img alt="icono javascript" src="https://mgarvia.github.io/portfolio/images/js.png" />
        <img alt="icono wordpress" src="https://mgarvia.github.io/portfolio/images/wordpress.png" />
        <img alt="icono git" src="https://mgarvia.github.io/portfolio/images/git.png" />
        <img alt="icono visual studio code" src="https://mgarvia.github.io/portfolio/images/visual-studio-code.png" />
        <img alt="icono zeplin" src="https://mgarvia.github.io/portfolio/images/zeplin.png" />
        <img alt="icono slack" src="https://mgarvia.github.io/portfolio/images/slack.png" />
        <img alt="icono github" src="https://mgarvia.github.io/portfolio/images/github.png" />
        <img alt="icono trello" src="https://mgarvia.github.io/portfolio/images/trello.png" />
        <img alt="icono gulp" src="https://mgarvia.github.io/portfolio/images/gulp.png" />
      </div>
      <div className="About__section">
        <div className="About__header section__header">
          {language === "EN"
            ? <h2 className="section__header--title">About me</h2>
            : <h2 className="section__header--title">Sobre mí</h2>

          }
        </div>
        <div className="About__content">
          {language === "EN"
            ? <div className="About__past About__half">
              <div className="About__past--image picture"></div>
              <div className="About__past--text text">
                <p>I studied Law, a year in <span>Italy</span>, started working in the international education industry, moved to <span>Australia</span>, more studying, more working, <span>english</span> everywhere, and back to <span>Spain</span>.</p>
                <p> I learned about <span>digital marketing</span>, created <span>my own start-up</span>, 100% <span>digital</span>, 100% <span>remote</span>, incubated a <span>technological project</span> in an entrepreneurship program, sold my company and finally did a <span>bootcamp in frontend development</span>.</p>
              </div>
              <div className="About__past--info About__info-section">
                <h3>[My past]</h3>
                <p>Law & Marketing. </p>
                <p>Sales & Operations Country Manager.</p> <p>Entrepreneur. Expert in making things happen.</p>
              </div>
            </div>
            : <div className="About__past About__half">
              <div className="About__past--image picture"></div>
              <div className="About__past--text text">
                <p>Estudié derecho, un año en <span>Italia</span>, empecé a trabajar en el sector de la educación internacional, me mudé a <span>Australia</span>, seguí estudiando, seguí trabajando, más <span>inglés</span> y vuelta a <span>España</span>.</p>
                <p> Aprendí sobre <span>marketing digital</span>, cree <span>mi propia start-up</span>, 100% <span>digital</span>, 100% en <span>remoto</span>, incubé un <span>proyecto tecnológico</span> en un programa de emprendimiento, vendí mi empresa y finalmente entré en un <span>bootcamp de desarrollo frontend</span>.</p>
              </div>
              <div className="About__past--info About__info-section">
                <h3>[Mi pasado]</h3>
                <p>Derecho & Marketing. </p>
                <p>Directora nacional de Ventas & Operaciones.</p> <p>Emprendedora. Experta en hacer que las cosas pasen.</p>
              </div>
            </div>
          }

          {language === "EN"
            ? <div className="About__future About__half">
              <div className="About__future--image picture"></div>
              <div className="About__future--text text">
                <p>
                  It may sound weird, but it has been my professional career what brought me here, to the techie world. I am an <span>open minded</span> professional, <span>hardworker</span>, who believes in <span>teamwork</span> and <span>autonomy</span>. </p>
                <p>The <span>initiative and curiosity</span> that took me to entrepreneur with  <span>success</span> a few years ago now takes me to become a frontend developer. I am just <span>ready for the next challenge</span>!
            </p>

              </div>
              <div className="About__future--info About__info-section">
                <h3><i className="fas fa-chevron-left"></i>My future<i className="fas fa-chevron-right"></i></h3>
                <p>Front-end developer. </p>
                <p>Learning to turn incredible designs into tangible projects. </p>
                <p>Looking forward to the next challenge.</p>
              </div>
            </div>
            : <div className="About__future About__half">
              <div className="About__future--image picture"></div>
              <div className="About__future--text text">
                <p>
                  Parcerá extraño, pero ha sido mi carrera profesional la que me ha traído hasta aquí, el mundo digital. Me considero una profesional de <span>mentalidad abierta</span>, con <span>gran capadidad de trabajo</span>, que cree en el <span>trabajo en equipo</span> y la <span>autonomía</span>.
                </p>
                <p>La <span>iniciativa y curiosidad</span> que me llevaron a <span>emprender con éxito</span> hace unos años, me lleva ahora a convertirme en desarrolladora front-end. ¡<span>Preparada para próximo reto</span>!
          </p>

              </div>
              <div className="About__future--info About__info-section">
                <h3><i className="fas fa-chevron-left"></i>Mi futuro<i className="fas fa-chevron-right"></i></h3>
                <p>Front-end developer. </p>
                <p>Aprendiendo a convertir diseños increíbles en proyectos tangibles. </p>
                <p>Deseando empezar el próximo reto.</p>
              </div>
            </div>
          }
        </div>
        <div className="About__love">
          {language === "EN"
            ? <h3>I love
              <span
                className="txt-rotate-EN"
                data-period="1000"
                data-rotate='[ "coding", "to travel", "learning new stuff", "FRIENDS!", "TED Talks", "eating :)", "Rubiks` cube", "having fun with F&F", "stackoverflow", "nature", "gifs!" ]'>
              </span>
            </h3>
            : <h3>Me encanta
              <span
                className="txt-rotate-ES"
                data-period="1000"
                data-rotate='[ "programar", "viajar", "seguir aprendiendo", "FRIENDS!", "TED Talks", "comer :)", "el cubo de Rubik", "pasar el rato con F&F", "stackoverflow", "la naturaleza", "los gifs!" ]'>
              </span>
            </h3>

          }
        </div>
        <div className="About__skills--box">

          {language === "EN"
            ? <div className="About__skills">
              <CvItem
                type={"studies"}
                name={"Law"}
                subtitle={"International"}
                titleHover={"Bachelor Degree - UCM"}
                description={"1 year studies in Italy"}
                icon={"graduation-cap"}
              />
              <CvItem
                type={"studies"}
                name={"Entrepreneurship"}
                subtitle={"Lean Startup | MVP"}
                titleHover={"Deusto Business School"}
                description={"Project semifinalist"}
                icon={"graduation-cap"}
              />
              <CvItem
                type={"studies"}
                name={"Digital Marketing"}
                subtitle={"Seo | Sem | Wordpress"}
                titleHover={"Expert certificate - BAI"}
                description={"Digital marketing 360"}
                icon={"graduation-cap"}
              />
              <CvItem
                type={"studies"}
                name={"Front-end"}
                subtitle={"Scrum | Agile | Git"}
                titleHover={"Bootcamp - Adalab"}
                description={"Html & Css | Js | React"}
                icon={"graduation-cap"}
              />
            </div>
            : <div className="About__skills">
              <CvItem
                type={"studies"}
                name={"Derecho"}
                subtitle={"Internacional"}
                titleHover={"Licenciatura - UCM"}
                description={"1 año en Italia"}
                icon={"graduation-cap"}
              />
              <CvItem
                type={"studies"}
                name={"Emprendimiento"}
                subtitle={"Lean Startup | MVP"}
                titleHover={"Deusto Business School"}
                description={"Proyecto semifinalista"}
                icon={"graduation-cap"}
              />
              <CvItem
                type={"studies"}
                name={"Marketing Digital"}
                subtitle={"Seo | Sem | Wordpress"}
                titleHover={"Curso experto - BAI"}
                description={"Marketing Digital 360"}
                icon={"graduation-cap"}
              />
              <CvItem
                type={"studies"}
                name={"Front-end"}
                subtitle={"Scrum | Agile | Git"}
                titleHover={"Bootcamp - Adalab"}
                description={"Html & Css | Js | React"}
                icon={"graduation-cap"}
              />
            </div>
          }

          {language === "EN"
            ? <div className="About__skills">
              <CvItem
                type={"work"}
                name={"Information Planet"}
                subtitle={"Spain | Australia"}
                titleHover={"Manager"}
                description={"Sales & Operations"}
                icon={"briefcase"}
              />
              <CvItem
                type={"work"}
                name={"The Yellow Pocket"}
                subtitle={"Start-up"}
                titleHover={"Founder"}
                description={"Business 360"}
                icon={"briefcase"}
              />
              <CvItem
                type={"work"}
                name={"Mundo Joven"}
                subtitle={"Spain | Mexico"}
                titleHover={"Country Manager"}
                description={"Sales & Marketing"}
                icon={"briefcase"}
              />
              <CvItem
                type={"work"}
                name={"Freelance"}
                subtitle={"Remote"}
                titleHover={"Code & Passion"}
                description={"100% me"}
                icon={"briefcase"}
              />
            </div>
            : <div className="About__skills">
              <CvItem
                type={"work"}
                name={"Information Planet"}
                subtitle={"España | Australia"}
                titleHover={"Manager"}
                description={"Ventas & Operaciones"}
                icon={"briefcase"}
              />
              <CvItem
                type={"work"}
                name={"The Yellow Pocket"}
                subtitle={"Start-up"}
                titleHover={"Fundadora"}
                description={"Desarrollo de negocio 360"}
                icon={"briefcase"}
              />
              <CvItem
                type={"work"}
                name={"Mundo Joven"}
                subtitle={"España | Mexico"}
                titleHover={"Directora nacional"}
                description={"Ventas & Marketing"}
                icon={"briefcase"}
              />
              <CvItem
                type={"work"}
                name={"Freelance"}
                subtitle={"Remoto"}
                titleHover={"Código & Pasión"}
                description={"Yo al 100%"}
                icon={"briefcase"}
              />
            </div>
          }
        </div>

      </div>
    </section>
  )
}

export default About;