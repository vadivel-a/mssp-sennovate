import React from "react";
import data from './MsspData.json';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Products from '../Products/Products';
import {MuiThemeProvider, createMuiTheme  } from '@material-ui/core/styles';
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
    <Router>
    <Header />
    <Sidebar />
      <Switch>
        <Route exact path="/" render={props => <Home productData = {data.categories} />} />
        <Route exact path="/products/:categories" render={props => <Products productData = {data.categories} />} />
      </Switch>
      <Footer />
    </Router>
    </MuiThemeProvider>
  )
}
