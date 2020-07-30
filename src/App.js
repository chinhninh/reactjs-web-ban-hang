import React, { Component } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Home from './pages/home/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
        

        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
