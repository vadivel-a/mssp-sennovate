import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {List,ListItem,Paper,Checkbox,FormControl,TextField} from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2)
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
    marginLeft:'25px'
  },
  ml15:{
    marginLeft:'13px'
  },
  m15:{
    marginTop:'15px',
    marginBottom:'15px',
    marginLeft:'13px',
  },
  textField: {
    '& > *': {
      margin: theme.spacing(2),
      width: '35ch'
    },
  },
}));
const inputlist = {
    "noapplications":"Number of SAAS Applications",
    "nolegacyapplications":"Number of On-Prem/Legacy Applications"
  };
export default function IntegrationRequirements(props) {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [values, setValues] = useState({});

  const handleChange = (event) => {
    setChecked(!checked);
  };
  const handleInputChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  return (
        <Paper className={classes.paper} elevation={0}>
            <Typography variant="h5" className={classes.h5}>Other Integration Requirements</Typography>
            <div alignItems="flex-start" >
              <Typography gutterBottom variant="h6" style={{'marginBottom':'0','marginTop':'15px'}}>
              <Checkbox
                checked={checked}
                onClick={handleChange}
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
              SSO</Typography>

              <Typography variant="h6" className={classes.ml15} style={{"marginBottom":"15px"}}>Application Integrations</Typography>
              <div className={classes.textField}>

                  {
                    Object.keys(inputlist).map((key) => {
                      return (<FormControl><TextField
                        id={key}
                        label={inputlist[key]}
                        type="number"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        name={key}
                        onChange={handleInputChange}
                        variant="outlined"
                      /></FormControl>)
                    })
                  }
                </div>
                <List className={classes.list}>
                  <ListItem className={classes.listitem}><DoneIcon fontSize="small" />VPN Radius Client Configuration</ListItem>
                  <ListItem className={classes.listitem}><DoneIcon fontSize="small" />WiFi Configurations</ListItem>
                  <ListItem className={classes.listitem}><DoneIcon fontSize="small" />WiFi Configurations</ListItem>
                  <ListItem className={classes.listitem}><DoneIcon fontSize="small" />Cloud integration such as AWS, GCP, Azure, etc.</ListItem>
                </List>
            </div>

        </Paper>
  );
}
