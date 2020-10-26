import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Grid,Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      padding: theme.spacing(1),
      width: '100%',
    },
  },
  bottombutton:{
    padding:20,
    textAlign:'center',
    '& > *': {
      margin: theme.spacing(1),
    }
  }
}));

export default function SetPassword() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    choosepassword: '',
    retypepassword: '',
    passwordhints: '',
    hintsanswer: '',
    title: ''
  });
  const handleChange = (event) => {
     setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <form noValidate autoComplete="off">
    <Grid   container
  direction="row"
  justify="center"
  alignItems="center" >
      <Grid item xs={6} spacing={2} className={classes.root}>
        <TextField label="Choose Password" variant="outlined" color='secondary' onClick={handleChange} name="choosepassword" />
        <TextField label="Retype Password" variant="outlined" color='secondary' onClick={handleChange} name="retypepassword" />
        <TextField label="Password Hints" variant="outlined" color='secondary' onClick={handleChange} name="passwordhints" />
        <TextField label="Hints Answes" variant="outlined" color='secondary' onClick={handleChange} name="hintsanswer" />
        <div className={classes.bottombutton}>
          <Button variant="outlined" size="large" color="secondary" onClick={() => {}}>Save</Button>
        </div>
      </Grid>
    </Grid>
    </form>
  );
}
