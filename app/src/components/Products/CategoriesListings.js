//https://www.digitalocean.com/community/tutorials/how-to-share-state-across-react-components-with-context

import React,{useState} from 'react';
import {Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor:'#F5F5F5',
  },
  title:{
    marginTop: '20px'
  }
}));
export default function CategoriesListings({name,index}) {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    setChecked(!checked);
  };

  return(
    <Grid item xs={4} key={index}>
      <Paper className={classes.paper} >
        <img src={process.env.PUBLIC_URL + '/images/security.png'} width="40px" alt={name} />
        <h6 className={classes.title}>{name}</h6>
        <Checkbox
          checked={checked}
          onClick={handleChange}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      </Paper>
    </Grid>
  )
}
