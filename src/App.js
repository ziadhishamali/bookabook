import React, { Component } from 'react';
import './styles/App.css';
import './styles/Home.css';
import './styles/Buy.css';
import './styles/Signin.css';
import './styles/Navbar.css';
import NavBar from './components/layout/NavBar';
import firebase from './components/auth/firebase';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import BuyBorrow from "./components/Pages/BuyBorrow";
import Signin from './components/auth/Signin';
import Signup from './components/auth/Signup';
import BookForm from './components/books/BookForm';
import Checkout from './components/Pages/CheckOut';

class App extends Component {
  state = {
    signedin: false,
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
          this.setState({user: firebaseUser, signedin: true});
      } else {
          this.setState({user: firebaseUser, signedin: false});
          console.log("not logged in");
      }
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App flex-column justify align">
          <Switch>  
            <Route path='/bookabook/signin' component={Signin} />
            <Route path='/bookabook/signup' component={Signup} />
            <NavBar signedin={this.state.signedin} user={this.state.user}/>
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
