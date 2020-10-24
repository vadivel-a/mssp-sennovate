import React,{useContext} from 'react';
import {Link } from "react-router-dom";
import {makeStyles,CardContent,Avatar,Card,Typography,Button,Divider,IconButton} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display:'block'
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
  },
  divider: {
    margin: theme.spacing(2, 0),
  }
}));


export default function MyDetails() {
  const classes = useStyles();

  return (
      <Card className={classes.root} elevation={2}>
        <CardContent align="center">
            <Avatar className={classes.large}><img src={`images/categories/1.png`} width="60px" alt='logo' /></Avatar>
            <Typography variant="h5" >My company name</Typography>
            <Divider variant="middle" className={classes.divider} />
            <Typography variant="body1" component="p">Name: Mr.Ram </Typography>
            <Typography variant="body1" component="p">Email: Ram@yopmail.com </Typography>
            <Typography variant="body1" component="p">Phone: +1 987 8765 7322 </Typography>
            <IconButton color="secondary" aria-label="edit" style={{'marginTop':'10px'}}>
              <EditIcon htmlColor="#000" />
            </IconButton>
        </CardContent>
      </Card>
  );
}
