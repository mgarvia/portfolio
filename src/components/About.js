import React from 'react';
import '../stylesheets/About.scss'

const About = () => {

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
    const elements = document.querySelectorAll('.txt-rotate');
    for (let element of elements) {
      const toRotate = element.getAttribute('data-rotate');
      const period = element.getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(element, JSON.parse(toRotate), period);
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
        <img src="http://localhost:3000//images/react.png" />
        <img src="http://localhost:3000//images/html5.png" />
        <img src="http://localhost:3000//images/css3.png" />
        <img src="http://localhost:3000//images/sass.png" />
        <img src="http://localhost:3000//images/js.png" />
        <img src="http://localhost:3000//images/wordpress.png" />
        <img src="http://localhost:3000//images/git.png" />
        <img src="http://localhost:3000//images/visual-studio-code.png" />
        <img src="http://localhost:3000//images/zeplin.png" />
        <img src="http://localhost:3000//images/slack.png" />
        <img src="http://localhost:3000//images/zeplin.png" />
        <img src="http://localhost:3000//images/trello.png" />
        <img src="http://localhost:3000//images/gulp.png" />
      </div>
      <div className="About__section">
        <div className="About__header section__header">
          <h2 className="section__header--title">This is me</h2>
        </div>
        <div className="About__content">
          <div className="About__past">
            <div className="About__past--image"></div>
            <div className="About__past--text">
              <p>I studied Law, a year in <span>Italy</span> , started working in the international education industry, moved to <span>Australia</span>, more studying, more working, <span>english</span> everywhere, and back to <span>Spain</span>. I learned about <span>digital marketing</span>, created <span>my own start-up</span>, 100% <span>digital</span>, 100% <span>remote</span>, incubated a <span>technological project</span> in an entrepreneurship program, sold my company and finally did a <span>bootcamp in frontend development</span>.</p>
            </div>
            <div className="About__past--info About__info-section">
              <h3>[My past]</h3>
              <p>Law & Marketing. <br />Sales & Operations Country Manager. <br />Entrepreneur. Expert in making things happen.</p>
              {/* <div className="timeline">
              <section className="timeline__icons">
                <img src="http://localhost:3000//images/uk.png" />
                <img src="http://localhost:3000//images/it.png" />
                <img src="http://localhost:3000//images/au.png" />
                <img src="http://localhost:3000//images/entrepreneur.png" />
                <img src="http://localhost:3000//images/au.png" />
                <img src="http://localhost:3000//images/au.png" />
              </section>
              <div className="timeline__line timeline__line--past"></div>
              <section className="timeline__info">
                <div>uk</div>
                <div>it</div>
                <div>au</div>
                <div>Emp</div>
                <div>Dch</div>
                <div>Mkt</div>
              </section>
            </div> */}
            </div>
          </div>
          <div className="About__future">
            <div className="About__future--image"></div>
            <div className="About__future--text">
              <p>
                It may sound weird, but it has been my professional career what brought me here, to the techie world. I am an <span>open minded</span> professional, <span>hardworker</span>, who believes in <span>teamwork</span> and <span>autonomy</span>. The <span>initiative and curiosity</span> that took me to entrepreneur with  <span>success</span> a few years ago now takes me to become a frontend developer. I am just <span>ready for the next challenge</span>!
            </p>

            </div>
            <div className="About__future--info About__info-section">
              <h3><i className="fas fa-chevron-left"></i>My future<i className="fas fa-chevron-right"></i></h3>
              <p>Front-end developer. <br />Learning to turn incredible designs into tangible projects. <br />Looking forward to the next challenge.</p>
              {/* <div className="timeline__line"></div>
            <section className="info-icons">
              <div>HTML</div>
              <div>CSS</div>
              <div>JS</div>
              <div>REACT</div>
              <div>SASS</div>
            </section> */}
            </div>
          </div>
        </div>
        <div className="About__love">
          <h3>I love
            <span
              className="txt-rotate"
              data-period="1000"
              data-rotate='[ "coding", "to travel", "learning new stuff", "FRIENDS!", "TED Talks", "eating :)", "Rubiks` cube", "having fun with F&F", "stackoverflow", "nature", "gifs!" ]'>
            </span>
          </h3>
        </div>
        <div className="About__skills--box">
          <div className="About__skills">
            <div className="About__skills--item">
              <h3>Law</h3>
              <span>International</span>
              <div className="About__skills--hover">
                <p>Bachelor Degree in Law - UCM</p>
                <span>1 year studies in Italy</span>
              </div>
            </div>
            <div className="About__skills--item">
              <h3>Entrepreneurship</h3>
              <span>
                <span>Lean Startup</span>
                <span>MVP</span>
              </span>
              <div className="About__skills--hover">
                <p>Incubation program - Santander Bank</p>
                <span>Project semifinalist</span>
              </div>
            </div>
            <div className="About__skills--item">
              <h3>Digital Marketing</h3>
              <span>
                <span>Seo</span>
                <span>Sem</span>
                <span>Wordpress</span>
              </span>
              <div className="About__skills--hover">
                <p>Expert certificate - BAI</p>
                <span>Digital marketing 360</span>
              </div>
            </div>
            <div className="About__skills--item">
              <h3>Front-end</h3>
              <span>
                <span>Scrum</span>
                <span>Agile</span>
                <span>Git</span>
              </span>
              <div className="About__skills--hover">
                <p>Bootcamp - Adalab</p>
                <span>Html & Css | Js | React</span>
              </div>
            </div>
          </div>
          <div className="About__skills">
            <div className="About__skills--item">
              <h3>Information Planet</h3>
              <span>
                <span>Spain</span>
                <span>Australia</span>
              </span>
              <div className="About__skills--hover">
                <p>Sales & Operations</p>
                <span>Manager</span>
              </div>
            </div>
            <div className="About__skills--item">
              <h3>The Yellow Pocket</h3>
              <span>Start-up</span>
              <div className="About__skills--hover">
                <p>Business 360</p>
                <span>Founder</span>
              </div>
            </div>
            <div className="About__skills--item">
              <h3>Mundo Joven</h3>
              <span>
                <span>Spain</span>
                <span>Mexico</span>
              </span>
              <div className="About__skills--hover">
                <p>Sales & Marketing</p>
                <span>Country Manager</span>
              </div>
            </div>
            <div className="About__skills--item">
              <h3>Freelance</h3>
              <span>Remote</span>
              <div className="About__skills--hover">
                <p>Code & Passion</p>
                <span>Just me</span>
              </div>
            </div>
          </div>
          {/* <div className="more">Why you should hire me?</div> */}
          {/* <a className="more" href="http://localhost:3000//images/Maria_Garvia_CV_Frontend_Developer.pdf" download>Download my CV</a> */}
        </div>

      </div>
    </section>
  )
}

export default About;


// https://cssanimation.rocks/scroll-animations/
// https://css-tricks.com/snippets/css/typewriter-effect/