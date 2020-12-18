import React from "react";
import data from './MsspData.json';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import Products from '../Products/Products';
import ProductsDetails from '../Products/ProductsDetails';
import Cart from '../Cart/Cart';
import {MuiThemeProvider, createMuiTheme  } from '@material-ui/core/styles';
import {CartProvider} from '../Context/CartContext';
import MyDetails from '../MyDetails/MyDetails';
import ProductSearch from '../ProductSearch/ProductSearch';
import IntegrationRequirements from '../IntegrationRequirements';

import AddProduct from "../AdminProduct/Add";
import EditProduct from "../AdminProduct/Edit";
import ProductList from "../AdminProduct/List";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff'
    },
    secondary:{
      main:'#62E509',
      contrastText: '#fff'
    }
  }
});
export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <CartProvider>
    <Router>
    <Header />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/" render={props => <Home productData = {data.categories} />} />
        <Route exact path="/products/:categories" render={props => <Products productData = {data.categories} />} />
        <Route exact path="/products/:categories/:categorie" render={props => <ProductsDetails productData = {data.categories} />} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/mydetails" component={MyDetails} />
        <Route exact path="/product-search" component={ProductSearch} />
        <Route exact path="/integration-requirements" render={props => <IntegrationRequirements productData = {data.categories} />} />

        //admin
        <Route exact path="/admin/product" component={ProductList} />
        <Route exact path="/admin/product/add" component={AddProduct} />
        <Route path="/admin/product/:id" component={EditProduct} />

      </Switch>
      <p></p>
    </Router>
    </CartProvider>
    </MuiThemeProvider>
  )
}
