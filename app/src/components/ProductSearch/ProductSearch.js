import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import {Autocomplete} from '@material-ui/lab';
import Typography from '@material-ui/core/Typography';
import {List,ListItem,Paper,Grid,TextField,Button,Checkbox } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
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
  searchinput:{
    background:"#fff"
  },
  button:{
    marginTop:'25px'
  },
  h5:{
    fontWeight:'500'
  }
}));
const solutionList = [
  { title: 'SSO'},
  { title: 'MFA'},
  { title: 'RRA'}
];
const options = solutionList.map((option) => {
  const firstLetter = option.title[0].toUpperCase();
  return {
    firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
    ...option,
  };
});
export default function Home(data) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(true);
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  const handleChange = (event) => {
    setChecked(!checked);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <Toolbar />

        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{"marginTop":"20px"}}
        >
          <Grid item xs={4} >

              <Autocomplete
                id="grouped-demo"
                options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
                groupBy={(option) => option.firstLetter}
                getOptionLabel={(option) => option.title}
                style={{ width: '100%' }}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                  setInputValue(newInputValue);
                }}
                renderInput={(params) => <TextField {...params} label="With categories" variant="outlined" color="secondary" className={classes.searchinput} />}
              />

          </Grid>
          <Grid item xs={12} >

              <Grid
              container
              direction="row"
              justify="center"
              alignItems="top"
              spacing={3}
              style={{"marginTop":"20px"}}
              >
                <Grid item xs={6} >
                    <Paper className={classes.paper} elevation={0}>
                        <Typography variant="h5" className={classes.h5}>Popular Solutions</Typography>
                        <div alignItems="flex-start" ><Typography gutterBottom variant="h6" style={{'marginBottom':'0','marginTop':'15px'}}>SSO</Typography>
                            <List>
                              <ListItem className={classes.listitem}><DoneIcon fontSize="small" />Security Questions</ListItem>
                              <ListItem className={classes.listitem}><DoneIcon fontSize="small" />Passwords</ListItem>
                              <ListItem className={classes.listitem}><DoneIcon fontSize="small" />SMS, Voice, and Email OTP</ListItem>
                              <ListItem className={classes.listitem}><DoneIcon fontSize="small" />Software OTP</ListItem>
                              <ListItem className={classes.listitem}><DoneIcon fontSize="small" />biometrics, Any SAML/OIDC auth provider</ListItem>
                            </List>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={6} >
                    <Paper className={classes.paper} elevation={0}>
                      <Typography variant="h5" className={classes.h5}>My Solutions</Typography>
                      <div alignItems="flex-start" >
                          <List>
                          {inputValue?
                            <ListItem className={classes.listitem}>
                                  <Checkbox
                                    defaultChecked
                                    checked={checked}
                                    onClick={handleChange}
                                    color="secondary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                  />
                            {inputValue}</ListItem>
                          :''}
                          </List>
                      </div>
                    </Paper>
                </Grid>
                <Grid item xs={12} align="center">
                  <Button variant="outlined" color="secondary" className={classes.button} >
                    Integration Requirements
                  </Button>
                </Grid>
              </Grid>

          </Grid>
        </Grid>

      </main>
    </div>
  );
}
