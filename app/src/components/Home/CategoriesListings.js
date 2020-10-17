import React from 'react';
import {Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title:{
    marginTop: '20px'
  }
}));
export default function CategoriesListings({categoriename,index}) {
  const classes = useStyles();
  return(
    <Grid item xs={4} key={index}>
    <Link to={`/products/${categoriename}`}>
      <Paper className={classes.paper}>
        <img src={`images/categories/${index}.png`} width="60px" alt={categoriename} />
        <h5 className={classes.title}>{categoriename}</h5>
      </Paper>
    </Link>
    </Grid>
  )
}
