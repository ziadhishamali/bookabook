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
import Loader from './components/layout/Loader';

class App extends Component {
  state = {
    signedin: false,
    loading: true,
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
          firebase.firestore().collection('users').doc(firebaseUser.uid).get().then((doc) => {
            let user = doc.data();
            this.setState({user, signedin: true, loading: false});
          })
      } else {
          this.setState({user: undefined, signedin: false, loading: false});
          console.log("not logged in");
      }
    })
  }

  

  render() {
    if (this.state.loading) {
      return <Loader />
    }
    return (
      <BrowserRouter>
        <div className="App flex-column justify align">
          <Switch>  
            <Route path='/signin' component={Signin} />
            <Route path='/signup' component={Signup} />
            <NavBar signedin={this.state.signedin} user={this.state.user}/>
          </Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route exact path='/sell' component={(props) => <BookForm {...props} user={this.state.user} />} />
          <Route exact path='/buy' component={(props) => <BuyBorrow {...props}/>} />
          <Route path='/buy/:buy_id' component={(props) => <Checkout {...props} user={this.state.user} />} />
          <Route exact path='/profile' component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
