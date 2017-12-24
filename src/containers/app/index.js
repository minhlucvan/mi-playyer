import React from 'react';
import { Route, Link } from 'react-router-dom'
import { TransitionSwitch } from 'react-router-v4-transition';
import ReactAplayer from '../../components/react-aplayer'
import Transition from '../../components/random-transition'
import Home from '../home'
import Login from '../login'
import About from '../about'

import './style.scss'

const App = () => (
  <div id="app">
    <div id="overlay"></div>
    <header>
      <div id="menu-bar">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div id="song-info">
        <h1>Song name</h1>
        <p>Song artist</p>
      </div>
      <div id="search">
        <i className="fa fa-search fa-2x"></i>
      </div>
    </header>
    <main id="content">
      <div className="pt-perspective">
        <TransitionSwitch parallel={true}>
          <Route exact path="/" >
            <Transition>
              <Home />
            </Transition>
          </Route>
          <Route exact path="/login" >
            <Transition>
              <Login />
            </Transition>
          </Route>
          <Route exact path="/about-us" >
            <Transition>
              <About />
            </Transition>
          </Route>
        </TransitionSwitch>
      </div>
      <div id="range">
        <input type="range" id="range-val" value="46" min="0" max="143" />
        <div id='tip'>Some tip</div>
      </div>
      <div id="time">
        <p>0:46</p>
      </div>
      <div id="buttons">
        <i className="fa fa-step-backward fa-3x"></i>
        <i className="fa fa-pause fa-3x step"></i>
        <i className="fa fa-step-forward fa-3x"></i>
      </div>
      <div id="total-time">
        <p>2:23</p>
      </div>
    </main>
    <footer>
      <div id="repeat">
        <i className="fa fa-repeat"></i>
      </div>
      <div id="random">
        <i className="fa fa-random"></i>
      </div>
    </footer>
  </div>
)

export default App
