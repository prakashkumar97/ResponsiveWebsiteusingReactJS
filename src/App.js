import React, { Component } from 'react';
import Landingpage from './pages/Landingpage.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './header/respwebsite.css';
class App extends Component {
  render() {
    return (
      <div>
        <Landingpage />
      </div>
    );
  }
}

export default App;
