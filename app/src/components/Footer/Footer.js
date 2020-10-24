import React from "react";
import { Paper,Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  footer: {
    padding: '10px',
    position:'fixed',
    bottom:'0',
    width:'100%'
  }
}));
export default function Footer() {
    const classes = useStyles();
    return (
      <Paper className={classes.footer}>
      <Typography align='center' >© 2020 sennovate All Rights Reserved.</Typography>
      </Paper>
    );

}
