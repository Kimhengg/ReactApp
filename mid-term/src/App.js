import React, { Component } from 'react';
import './App.css';

import {Money1} from './money1.js';
import {Money2} from './money2.js';
import {Money3} from './money3.js';
import {Money4} from './money4.js';
import {Money5} from './money5.js';
import {Money6} from './money6.js';
import {Money7} from './money7.js';
import {Money8} from './money8.js';
import {Money9} from './money9.js';
import {Money10} from './money10.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-header">
          <h1> CURRENCY CONVERTER</h1>
            <Money1/>
            <Money2/>
            <Money3/>
            <Money4/>
            <Money5/>
            <Money6/>
            <Money7/>
            <Money8/>
            <Money9/>
            <Money10/>
        </div>
      </div>
    );
  }
}

export default App;
