import React,{useState,useReducer} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import {Grid,Paper,Button,Backdrop,CircularProgress } from '@material-ui/core';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import {useParams,useHistory} from "react-router-dom";
//import {useParams} from "react-router-dom";
import CategoriesListings from './CategoriesListings';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin:10,
    position:'relative'
  },
  loader:{
    position: 'absolute',
    backgroundColor: 'rgb(0 0 0 / 35%)',
    color: '#fff',
    height: '100%',
    width: '100%',
    left: '0',
    top: '0',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    position:'absolute'
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
  title:{
    marginBottom:'25px'
  },
  button:{
    marginTop:'25px'
  }
}));

const formReducer = (state, event) => {
 return {
   ...state,
   [event.name]: event.value
 }
}

export default function Products(data) {
  const classes = useStyles();
  let params = useParams();
  //let params = useParams();
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  let cat = {1:"Okta",2:"IDAPTIVE",3:"PingFederate"};
  const handleCheckChieldElement=(name,checked)=>{
    setFormData({
       name: name,
       value: checked,
     });
  }
  let history = useHistory();
  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData);
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      history.push('/products/Workforce%20Identity%20Products/SSO');
    }, 500);
  }

  const breadcrumbList = [
    {title:"Home", to:"/"},
    {title:"Products", to:"/"},
    {title:params.categories, to:'current'}
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <Toolbar />
        <Breadcrumbs currentTitle={params.categories} pageTitle={params.categories} breadcrumbList={breadcrumbList} />



<Grid container spacing={3}>

  <Grid item xs={6}>
    <Paper className={classes.paper}>

    <h3 className={classes.title}>SSO</h3>
    <Grid container spacing={3}>
    {
      Object.keys(cat).map((index,value) => {
        var name = cat[index];
        return (<CategoriesListings key={index} name={name} index={index} handleCheckChieldElement={handleCheckChieldElement} />)
      })
    }
    </Grid>

    <Button variant="outlined" color="secondary" className={classes.button} onClick={handleSubmit}>
      Compare Solutions
    </Button>

      <Backdrop className={classes.backdrop} open={submitting}>
              <CircularProgress color="secondary" />
      </Backdrop>

    </Paper>
  </Grid>

  <Grid item xs={6}>
    <Paper className={classes.paper}>

    <h3 className={classes.title}>SSO</h3>
    <Grid container spacing={3}>
    {
      Object.keys(cat).map((index,value) => {
        var name = cat[index];
        return (<CategoriesListings key={index} name={name} index={index} handleCheckChieldElement={handleCheckChieldElement} />)
      })
    }
    </Grid>

    <Button variant="outlined" color="secondary" className={classes.button} onClick={handleSubmit}>
      Compare Solutions
    </Button>
    <Backdrop className={classes.backdrop} open={submitting}>
            <CircularProgress color="secondary" />
    </Backdrop>


    </Paper>
  </Grid>


</Grid>


      </main>
    </div>
  );
}
