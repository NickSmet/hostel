import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';

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
import { TinyButton as ScrollUpButton } from 'react-scroll-up-button';
import Visa from './components/visa/visa';
import Group from './components/group/group';
import Transfer from './components/transfer/transfer';
import Contacts from './components/contacts/contacts';
import FAQ from './components/faq/faq';
import Rooms from './components/rooms/rooms';
import Room from './components/rooms/room';
import NotFound from './components/not-found';
import AdminRedirect from './components/admin-redirect';

class App extends Component {
  constructor() {
    super();
    ReactGA.initialize('UA-131048082-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <HeaderMainMenu />
          <MobileHeaderMainMenu />
          <Switch>
          <Route path="//" component={MainPage} />
          <Route path="/admin" component={AdminRedirect} />
          <Route path="/visa" component={Visa} />
          <Route path="/groups" component={Group} />
          <Route path="/transfer" component={Transfer} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/faq" component={FAQ} />
          <Route exact path="/hotel" render={() => <Rooms cat="hotel" />} />
          <Route path="/hotel/:number" component={Room} />
          <Route path="/hostel/:number" component={Room} />
          <Route exact path="/hostel" render={() => <Rooms cat="hostel" />} />
          <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
          <ScrollUpButton />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
