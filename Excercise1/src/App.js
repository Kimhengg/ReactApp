import React, { Component } from 'react';
import './App.css';

import {SelectBox} from './SelectBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="hero is-info is-large">
          { /* <!-- Hero header: will stick at the top -->*/ }
          <div className="hero-head">
            <header className="nav">
              <div className="container">
                <div className="nav-center">
                  <a className="nav-item">
                    <img src="https://upload.wikimedia.org/wikipedia/en/5/5d/React_-_The_Anti-Counterfeiting_Network_logo.jpg" alt="Logo" />
                  </a>
                </div>
                <span className="nav-toggle">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <div className="nav-center nav-menu">
                  <a className="nav-item is-active">
                    Hello What Your Name
                  </a>
                  <span className="nav-item">
                    <a className="button is-info is-inverted">
                   Answer</a>
                  </span>
                </div>
              </div>
            </header>
          </div>

          {/* <!-- Hero content: will be in the middle --> */}
          <div className="hero-body-center">
            <SelectBox />
          </div>

          
        </section>
      </div>
    );
  }
}

export default App;
