import React, { Component } from 'react';
import './App.css';
import NavBar from './components/layout/NavBar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Route exact path='bookabook/' component={Home}/>
          <Route path='bookabook/about' component={About}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
