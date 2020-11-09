import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {List,ListItem,Paper,Checkbox } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  listitem:{
    fontSize:'16px',
    padding:'5px 0',
    '& > *': {
      marginRight: '10px',
    },
  },
  h5:{
    fontWeight:'500'
  },
  list:{
    marginLeft:'13px'
  }
}));

export default function PopularSolutions(props) {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(!checked);
  };

  return (
        <Paper className={classes.paper} elevation={0}>
            <Typography variant="h5" className={classes.h5}>Popular Solutions</Typography>
            <div alignItems="flex-start" >
              <Typography gutterBottom variant="h6" style={{'marginBottom':'0','marginTop':'15px'}}>
              <Checkbox
                checked={checked}
                onClick={handleChange}
                color="secondary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
              SSO</Typography>
                <List className={classes.list}>
                  <ListItem className={classes.listitem}><DoneIcon fontSize="small" />Security Questions</ListItem>
                  <ListItem className={classes.listitem}><DoneIcon fontSize="small" />Passwords</ListItem>
                  <ListItem className={classes.listitem}><DoneIcon fontSize="small" />SMS, Voice, and Email OTP</ListItem>
                  <ListItem className={classes.listitem}><DoneIcon fontSize="small" />Software OTP</ListItem>
                  <ListItem className={classes.listitem}><DoneIcon fontSize="small" />biometrics, Any SAML/OIDC auth provider</ListItem>
                </List>
            </div>
        </Paper>
  );
}
