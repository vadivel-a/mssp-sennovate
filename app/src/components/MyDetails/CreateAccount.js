import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {Grid,Button,Checkbox} from '@material-ui/core';

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

export default function CreateAccount() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    company_name: '',
    contact_name: '',
    emain: '',
    user_name_same: true,
    user_name: '',
    website: '',
    phone: '',
    title: ''
  });
  const handleChange = (event) => {
     setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <form noValidate autoComplete="off">
    <Grid container >
      <Grid item xs={6} spacing={2} className={classes.root}>
        <TextField label="Company Name" variant="outlined" color='secondary' onClick={handleChange} name="company_name" />
        <TextField label="Contact Name" variant="outlined" color='secondary' onClick={handleChange} name="contact_name" />
        <TextField label="e-Mail" variant="outlined" color='secondary' onClick={handleChange} name="email" />
        <FormControlLabel
          control={<Checkbox checked={state.user_name_same} onClick={handleChange} name="user_name_same" />}
          label="Use Name Same as e-Mail Id"
        />

      </Grid>
      <Grid item xs={6} spacing={2} className={classes.root}>
      <TextField label="Enter User Name" variant="outlined" color='secondary' onClick={handleChange} name="user_name"  />
        <TextField label="Company Website Link" variant="outlined" color='secondary' onClick={handleChange} name="website"  />
        <TextField label="Title" variant="outlined" color='secondary' onClick={handleChange} name="title"  />
        <TextField label="Mobile" variant="outlined" color='secondary' onClick={handleChange} name="mobile"  />
      </Grid>
      <Grid item xs={12} spacing={2} >
      <div className={classes.bottombutton}>
        <Button variant="outlined" size="large" color="secondary" onClick={() => {}}>Clear</Button>
        <Button variant="outlined" size="large" color="secondary" onClick={() => {}}>Save</Button>
      </div>
      </Grid>

    </Grid>
    </form>
  );
}
