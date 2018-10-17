import React, { Component } from 'react';
import './fonts/font-hilltericon.css';
import './fonts/font-awesome.min.css';
import './fonts/stylesheet.css';
import './App.css';
import Header from './components/main-page/header/header';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
      </div>
    );
  }
}

export default App;
