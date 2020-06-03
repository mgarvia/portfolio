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
        <div className="About__header section__header">
          <h2 className="section__header--title">About me</h2>
        </div>
        <div className="About__content">
          <div className="About__past">
            <div className="About__past--image"></div>
            <div className="hidden">
              I studied digital marketing, founded my own start-up (a master's degree!), Hatched a technology project in an entrepreneurship program, and sold the company.

              And what do you do after selling your project? Start a new one:

              BECOME A FRONT-END DEVELOPER
          </div>
            <div className="About__past--info About__info-section">
              <h3>[My past]</h3>
              <p>Law & Marketing. <br />Sales & Operations Country Manager. <br />Entrepreneur. Expert in making things happen.</p>
              <div className="timeline__line timeline__line--past"></div>
              <section className="info-icons">
                <div>uk</div>
                <div>it</div>
                <div>au</div>
                <div>Emp</div>
                <div>Dch</div>
                <div>Mkt</div>
              </section>
              <button type="button">Download CV</button>
            </div>
          </div>
          <div className="About__future">
            <div className="About__future--image"></div>
            <div className="hidden">
              I studied Law, but I come from the international education sector. Oddly enough, it has been my professional career that has brought me here. I have always worked in decentralized teams, remote, technology and English have been part of my life since the beginning of time.
            </div>
            <div className="About__future--info About__info-section">
              <h3><i class="fas fa-chevron-left"></i>My future<i class="fas fa-chevron-right"></i></h3>
              <p>Front-end developer. <br />Learning to turn incredible designs into tangible projects. <br />Looking forward to the next challenge.</p>
              <div className="timeline__line"></div>
              <section className="info-icons">
                <div>HTML</div>
                <div>CSS</div>
                <div>JS</div>
                <div>REACT</div>
                <div>SASS</div>
              </section>
              <div>FAQs "Why you should hire me"</div>
            </div>
          </div>
        </div>
        <div className="About__love">
          <h3>I love
            <span
              class="txt-rotate"
              data-period="1000"
              data-rotate='[ "coding", "travelling", "to keep on learning", "FRIENDS!", "Rubiks` cube", "eating :)", "having fun with F&F" ]'>
            </span>
          </h3>
        </div>
        <div className="About__skills">
          <div>
            <p>Law</p>
            <span>International</span>
          </div>
          <div>
            <p>Entrepreneurship</p>
            <span>
              <span>Lean Startup</span>
              <span>MVP</span>
            </span>
          </div>
          <div>
            <p>Digital Marketing</p>
            <span>
              <span>Seo</span>
              <span>Sem</span>
              <span>Wordpress</span>
            </span>
          </div>
          <div>
            <p>Front-end</p>
            <span>
              <span>Scrum</span>
              <span>Agile</span>
              <span>Git</span>
            </span>
          </div>
        </div>
        <div className="About__skills">
          <div>
            <p>Information Planet</p>
            <span>
              <span>Spain</span>
              <span>Australia</span>
            </span>
          </div>
          <div>
            <p>The Yellow Pocket</p>
            <span>Start-up</span>
          </div>
          <div>
            <p>Mundo Joven</p>
            <span>
              <span>Spain</span>
              <span>Mexico</span>
            </span>
          </div>
          <div>
            <p>Freelance</p>
            <span>Remote</span>
          </div>
        </div>
      </section>
  )
}

export default About;


// https://cssanimation.rocks/scroll-animations/
// https://css-tricks.com/snippets/css/typewriter-effect/