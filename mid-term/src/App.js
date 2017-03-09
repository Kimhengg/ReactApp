import React, { Component } from 'react';
import './App.css';
import './bulma.css';
import {Money1} from './money1.js';
import {Part1} from './part1.js';
import {Graph} from './graph.js';

class App extends Component {
  render() {
    return (
        <div className="hero-head">
               <header className="nav">
                 <div className="container">
                   <div className="nav-left">
                     <a className="nav-item">Money Exchange</a>
                   </div>                
                   <div className="nav-right nav-menu">
                     <a className="nav-item is-active">Powered by ReactJS</a>
                      <a className="nav-item is-active"><img src="https://reactbkk.github.io/1.0.0/reactbkk-logo.png" alt="Logo" /></a>                    
                   </div>
                 </div>
               </header>
               <div className="hero-body">
                  <div className="row">
                    <div className="col-md-4">
                      <Part1/> {/* First Component */}
                    </div>
                    <div className="col-md-4">
                      <Graph/> {/* Second Component */}
                    </div>
                      <Money1 buttonText="Convert"/> {/* Third Component */}
                </div>
              </div>
        </div>
    );
  }
}
export default App;