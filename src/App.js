import React, { Component } from 'react';
import './styles/App.css';
import './styles/Home.css';
import './styles/Buy.css';
import './styles/Signin.css';
import './styles/Navbar.css';
import NavBar from './components/layout/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import BuyBorrow from "./components/Pages/BuyBorrow";
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import BookForm from './components/books/BookForm';
import Checkout from './components/Pages/CheckOut';

class App extends Component {
  state = {
    
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App flex-column justify align">
          <Switch>  
            <Route path='/bookabook/signin' component={Signin} />
            <Route path='/bookabook/signup' component={Signup} />
            <NavBar/>
          </Switch>
          <Route exact path='/bookabook/' component={Home} />
          <Route path='/bookabook/about' component={About} />
          <Route exact path='/bookabook/sell' component={BookForm} />
          <Route exact path='/bookabook/buy' component={(props) => <BuyBorrow {...props}/>} />
          <Route path='/bookabook/buy/:buy_id' component={(props) => <Checkout {...props}/>} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
