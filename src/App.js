import React, { Component } from 'react';
import {
	Route,
	HashRouter
} from 'react-router-dom';

import './fonts/font-hilltericon.css';
import './fonts/font-awesome.min.css';
import './fonts/stylesheet.css';
import './App.css';
import './components/shared/shared.css';
import MainPage from './components/main-page/main-page';
import Header from './components/main-page/header/header';
import Footer from './components/main-page/footer/footer';
import HeaderMainMenu from './components/main-page/header/header-main-menu';
import MobileHeaderMainMenu from './components/main-page/header/mobile-header-main-menu';
import {TinyButton as ScrollUpButton} from "react-scroll-up-button";
import Visa from './components/visa/visa';
import Group from './components/group/group';
import Transfer from './components/transfer/transfer';
import Contacts from './components/contacts/contacts';
import FAQ from './components/faq/faq';
import Rooms from './components/rooms/rooms';

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
            <Route
              path="/groups"
              component={ Group } />
            <Route
              path="/transfer"
              render={ Transfer } />
            <Route
              path="/contacts"
              component={ Contacts } />
            <Route
              path="/faq"
              component={ FAQ } />
            <Route
              path="/hotel"
              render={ () => <Rooms cat='hotel' /> } />
            <Route
              path="/hostel"
              render={ () => <Rooms cat='hostel' /> } />
          <Footer />
          <ScrollUpButton/>
        </div>
      </HashRouter>
      
    );
  }
}

export default App;
