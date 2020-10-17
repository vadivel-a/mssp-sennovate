import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CategoriesListings from './CategoriesListings';

const containerLeft = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginLeft:containerLeft
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Home(data) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <Toolbar />

        <Grid container spacing={3}>
        {
          Object.keys(data['productData']).map((index) => (
            Object.keys(data['productData'][index]).map((categoriename) => (
              CategoriesListings({categoriename,index})
            ))
          ))
        }
        </Grid>

      </main>
    </div>
  );
}
