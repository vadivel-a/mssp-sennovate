import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {List,ListItem,Paper,Grid,Button,Checkbox } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import SearchBox from './SearchBox';
import PopularSolutions from './PopularSolutions';

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
  button:{
    marginTop:'25px'
  },
  h5:{
    fontWeight:'500'
  },
  list:{
    marginLeft:'13px'
  }
}));

export default function ProductSearch(props) {
  const classes = useStyles();
  const [checked, setChecked] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setChecked(!checked);
  };
  const changeSetInputValue = (newInputValue) => {
    setInputValue(newInputValue);
  }
  const breadcrumbList = [
    {title:"Home", to:"/"},
    {title:"Products", to:"/"},
    {title:"Workforce Identity", to:'current'}
  ];
  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <Toolbar />
        <Breadcrumbs currentTitle={'Workforce Identity'} pageTitle={'Sennovate MSSP Solution Builder'} breadcrumbList={breadcrumbList} />

        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{"marginTop":"20px"}}
        >
          <Grid item xs={4} >
            <SearchBox onChangeSetInputValue={changeSetInputValue} />
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
                    <PopularSolutions />
                </Grid>
                <Grid item xs={6} >
                {inputValue?
                    <Paper className={classes.paper} elevation={0}>
                      <Typography variant="h5" className={classes.h5}>My Solutions</Typography>
                      <div alignItems="flex-start" >
                          <List>
                            <ListItem className={classes.listitem}>
                                  <Checkbox
                                    defaultChecked
                                    checked={checked}
                                    onClick={handleChange}
                                    color="secondary"
                                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                                  />
                            {inputValue}</ListItem>

                          </List>
                      </div>
                    </Paper>
                  :''}
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
