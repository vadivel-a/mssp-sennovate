import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button,Grid,Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      padding: theme.spacing(1),
      marginTop: theme.spacing(1),
    }
  },
  button:{
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(2),
  }
}));

export default function VerifyAccount() {
  const classes = useStyles();

  return (
    <Grid container >
      <Grid item xs={12} spacing={2} className={classes.root}>
        <Typography variant="body1" component="p">Dear Mr.Sam</Typography>
        <Typography variant="body1" component="p">
          Kindly verify your Sennovate Managed Services Account by clicking the Verify Button provide below. By clicking the verify button you also agree to the Terms & Conditions of Sennovate Account. Kindly see our Privacy policy on our website
        </Typography>
        <Button className={classes.button} variant="outlined" size="large" color="secondary" onClick={() => {}}>Click to verify your e-Mail</Button>
      </Grid>
    </Grid>
  );
}
