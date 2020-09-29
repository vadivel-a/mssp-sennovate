import React, { Component } from "react";
import data from './MsspData.json';
import Home from '../Home/Home';
import Products from '../Products/Products';
import ProductsDetails from '../Products/ProductsDetails';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

class App extends Component {
  render() {
  return (
    <Router>
    <Header />
      <Switch>
       <Route exact path="/products/:types" render={props => <Products productData = {data} />} />
       <Route exact path="/products/:types/:parentCategories/:childCategories" render={props => <ProductsDetails productData = {data} />} />
       <Route exact path="/" render={props => <Home productData = {data} />} />
       </Switch>
      <Footer />
    </Router>
  )
  }
}

export default App
