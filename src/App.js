import React, { Component } from 'react';
import './App.css';
import NavBar from './components/layout/NavBar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Pages/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Route exact path="/" component={Home}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
