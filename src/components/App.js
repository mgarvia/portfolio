import React from 'react';
import Header from './Header';
import Projects from './Projects';
import Quote from './Quote';
import About from './About';
import Contact from './Contact';

import '../stylesheets/App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Projects />
          <Quote />
          <About />
          <Contact />
        </main>
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
