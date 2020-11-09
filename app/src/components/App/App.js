import React from "react";
import data from './MsspData.json';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Products from '../Products/Products';
import ProductsDetails from '../Products/ProductsDetails';
import Cart from '../Cart/Cart';
import {MuiThemeProvider, createMuiTheme  } from '@material-ui/core/styles';
import {CartProvider} from '../Context/CartContext';
import MyDetails from '../MyDetails/MyDetails';
import ProductSearch from '../ProductSearch/ProductSearch';
import IntegrationRequirements from '../IntegrationRequirements';
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
      main:'#62E509'
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
        <Route exact path="/" render={props => <Home productData = {data.categories} />} />
        <Route exact path="/products/:categories" render={props => <Products productData = {data.categories} />} />
        <Route exact path="/products/:categories/:categorie" render={props => <ProductsDetails productData = {data.categories} />} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/mydetails" component={MyDetails} />
        <Route exact path="/product-search" component={ProductSearch} />
        <Route exact path="/integration-requirements" render={props => <IntegrationRequirements productData = {data.categories} />} />
      </Switch>
      <p></p>
    </Router>
    </CartProvider>
    </MuiThemeProvider>
  )
}
