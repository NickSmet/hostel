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
import Book from './components/main-page/wubook/book';
import Info from './components/main-page/info/info';
import Footer from './components/main-page/footer/footer';
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <HeaderMainMenu />
        <MobileHeaderMainMenu />
        <Slider />
        <Gallery />
        <Book />
        <Info />
        <Footer />
        <ScrollUpButton/>
          
      </div>
    );
  }
}

export default App;
