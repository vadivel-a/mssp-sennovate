import React from 'react';
import {Link } from "react-router-dom";
import {makeStyles,Paper,Avatar,Grid,Typography,Button} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title:{
    marginTop: '20px'
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    backgroundColor: '#F4F4F4'
  },
  button:{
    marginTop:15
  }
}));
export default function CategoriesListings({categoriename,index}) {
  const classes = useStyles();
  return(
    <Grid item xs={4} key={index}>
    <Link to={`/products/${categoriename}`}>
      <Paper className={classes.paper}>

      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar className={classes.large}><img src={`images/categories/${index}.png`} width="60px" alt={categoriename} /></Avatar>
        </Grid>
        <Grid item xs zeroMinWidth align="left">
          <Typography variant="h5" >{categoriename}</Typography>
          <Button variant="outlined" color="secondary" className={classes.button}>View Products</Button>
        </Grid>
      </Grid>

      </Paper>
    </Link>
    </Grid>
  )
}
