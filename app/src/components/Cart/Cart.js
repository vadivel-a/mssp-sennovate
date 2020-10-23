import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Grid,AppBar,Tabs,Tab,Paper} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import MyCart from './MyCart';
import MyOrders from './MyOrders';
import MyRenewals from './MyRenewals';
import MyDetails from './MyDetails';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  }
}));

export default function Cart() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const breadcrumbList = [
    {title:"Home", to:"/"},
    {title:"Cart", to:"current"}
  ];
  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <Toolbar />
        <Breadcrumbs currentTitle="Cart" pageTitle="Cart" breadcrumbList={breadcrumbList} />

<Grid container spacing={3}>
  <Grid item xs={4}>
    <Paper className={classes.paper} elevation={0}>
    <MyDetails />
    </Paper>
  </Grid>
  <Grid item xs={8}>
    <Paper className={classes.paper} elevation={0}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="My Cart" {...a11yProps(0)} />
          <Tab label="My Orders" {...a11yProps(1)} />
          <Tab label="My Renewals" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction}>
          <MyCart />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <MyOrders />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <MyRenewals />
        </TabPanel>
    </Paper>
  </Grid>
</Grid>

      </main>
    </div>
  );
}
