import React, { Component } from 'react';
import './fonts/font-hilltericon.css';
import './fonts/font-awesome.min.css';
import './fonts/stylesheet.css';
import './App.css';
import Header from './components/main-page/header/header';
import HeaderMainMenu from './components/main-page/header/header-main-menu';
import MobileHeaderMainMenu from './components/main-page/header/mobile-header-main-menu';
import Slider from './components/main-page/slider/slider';
import Gallery from './components/main-page/gallery/gallery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HeaderMainMenu />
        <MobileHeaderMainMenu />
        <Slider />
        <Gallery />
      </div>
    );
  }
}

export default App;
