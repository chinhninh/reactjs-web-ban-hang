import React, { Component } from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import ListProduct from './pages/listProduct/ListProduct';
import ProductDetail from './pages/productDetail/ProductDetail';
import Cart from './pages/cart/Cart';
import Contact from './pages/contact/Contact';
import ContentSearch from './pages/contentSearch/ContentSearch';
import ChangeInfo from './pages/changeInfo/ChangeInfo';
import OrderHistory from './pages/orderHistory/OrderHistory';

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
            <Route path="/list-product">
              <ListProduct />
            </Route>
            <Route path={"/product-detail/:id"} render={(props) => <ProductDetail {...props}/>}/>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/search">
              <ContentSearch />
            </Route>
            <Route path="/change-info">
              <ChangeInfo />
            </Route>
            <Route path="/order-history">
              <OrderHistory />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
