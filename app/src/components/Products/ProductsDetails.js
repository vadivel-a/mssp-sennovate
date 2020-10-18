import React,{useState,useRef} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import {List,ListItem,ListSubheader,Tooltip,Button,Paper,Grid,Card,CardActions,CardContent} from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import CartModel from './CartModel';
import {useParams} from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 14,
    padding:15
  },
  arrow: {
      color: theme.palette.common.pink,
  },
}))(Tooltip);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  cartbox:{
    display: 'flex',
    marginBottom:15,
    backgroundColor:'#fbfbfb'
  }
}));

export default function ProductsDetails(data) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [cartmodel, setCartmodel] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let params = useParams();

  const tabData = data['productData'][0]['Workforce Identity Products'][0]['SSO'][0]['tiers'];
  function addToCart(){
    setCartmodel(true);
  }
  function cartModelclose(){
    setCartmodel(false);
  }
  console.log(tabData);
  function featuresList(data){
    return Object.keys(data).map((key)=>{
      return(<List>{data[key]['featureText']}
        <LightTooltip arrow placement="top" title="LoremFlickr provides placeholder images for every case, web or print, on almost any subject, in any size. It's simple and free. Just put the custom url in your code like s">
          <InfoOutlinedIcon color="secondary" style={{'cursor':'pointer'}} />
        </LightTooltip>
      </List>);
    });
  }
  function tabPanelContent(features){
    return(<div>{
        Object.keys(features).map((key)=>{
          return(<div alignItems="flex-start" key={key}><h5><b>{features[key]['featureText']}</b></h5><List>{featuresList(features[key]['children'])}</List></div>);
        })
      }
    </div>)
  }
  function cartbox(data, type){
    let price = data['price'];
    if(type === 'Year'){price = price * 12;}
    return(
      <Card className={classes.cartbox} align="center" variant="outlined">
        <CardContent>
          <Typography variant="h5">
            SSO
          </Typography>
          <Typography variant="h2" color="textSecondary" style={{'width':'150px'}}>
            ${price}
          </Typography>
          <Typography component="p" style={{'font-size':'12px'}}>
            Per User / Per {type}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={addToCart} size="large" variant="outlined" color="secondary"><ShoppingCartIcon />Add Cart</Button>
        </CardActions>
      </Card>
    );
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <Toolbar />
        <Breadcrumbs currentTitle='SSO' />
        <Paper >
        <AppBar position="static" elevation={0} variant="outlined" >
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
        {
          Object.keys(tabData).map((key)=>(
            <Tab key={key} label={tabData[key]['name']} {...a11yProps(Number(key))} />
          ))
        }
          </Tabs>
        </AppBar>

        {
          Object.keys(tabData).map((key)=>{
            return(<TabPanel key={key}  value={value} index={Number(key)}>
            <Grid container spacing={3}>
              <Grid item xs={6}>{tabPanelContent(tabData[key]['features'])}</Grid>
              <Grid item xs={6} justify="flex-end" alignItems="center">
                <Grid container
                      direction="row"
                      justify="flex-end"
                      alignItems="center"
                >
                {cartbox(tabData[key],'Month')}
                {cartbox(tabData[key],'Year')}
                </Grid>
              </Grid>
            </Grid>
            </TabPanel>)
          })
        }
        </Paper>
        {
          cartmodel?<CartModel isopen={cartmodel} onCartModelclose={cartModelclose} />:''
        }
      </main>
    </div>
  );
}
