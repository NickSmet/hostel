import React, { Component } from 'react';
import {
	Route,
	Link,
	HashRouter
} from 'react-router-dom';

import './fonts/font-hilltericon.css';
import './fonts/font-awesome.min.css';
import './fonts/stylesheet.css';
import './App.css';
import MainPage from './components/main-page/main-page';
import Header from './components/main-page/header/header';
import Footer from './components/main-page/footer/footer';
import HeaderMainMenu from './components/main-page/header/header-main-menu';
import MobileHeaderMainMenu from './components/main-page/header/mobile-header-main-menu';
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";
import Visa from './components/visa/visa';

class App extends Component {
  render() {
    return (
      <HashRouter >
        <div className="App">
          <Header />
          <HeaderMainMenu />
          <MobileHeaderMainMenu />
            <Route
              path="//"
              render={ MainPage } />
            <Route
              path="/visa"
              component={ Visa } />
          <Footer />
          <ScrollUpButton/>
        </div>
      </HashRouter>
      
    );
  }
}

export default App;
