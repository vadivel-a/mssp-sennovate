import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
import {useParams,Link} from "react-router-dom";
import Divider from '@material-ui/core/Divider';
import CategoriesListings from './CategoriesListings';

const containerLeft = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginLeft:containerLeft
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

export default function Products(data) {
  const classes = useStyles();
  let params = useParams();
  console.log(data['productData']);
  let cat = {1:"Okta",2:"IDAPTIVE",3:"PingFederate"};

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <Toolbar />


<div>

<Grid container spacing={3}>

  <Grid item xs={6}>
    <Paper className={classes.paper}>

    <h3 className={classes.title}>SSO</h3>
    <Grid container spacing={3}>
    {
      Object.keys(cat).map((index,value) => {
        var name = cat[index];
        return CategoriesListings({name,index})
      })
    }
    </Grid>

    <Button variant="contained" color="secondary" className={classes.button}>
      Compare
    </Button>

    </Paper>
  </Grid>

  <Grid item xs={6}>
    <Paper className={classes.paper}>

    <h3 className={classes.title}>MFA</h3>
    <Grid container spacing={3}>
    {
      Object.keys(cat).map((index,value) => {
        var name = cat[index];
        return CategoriesListings({name,index})
      })
    }
    </Grid>

    <Button variant="contained" color="secondary" className={classes.button}>
      Compare
    </Button>

    </Paper>
  </Grid>



</Grid>

</div>

      </main>
    </div>
  );
}
