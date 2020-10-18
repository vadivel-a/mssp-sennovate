import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

export default function SimpleBreadcrumbs(props) {
  return (
    <Breadcrumbs aria-label="breadcrumb" style={{'margin-bottom':'10px'}}>
      <Link color="inherit" to={"/"} >Home</Link>
      <Link color="inherit" to="/products" >Products</Link>
      <Typography color="textPrimary">{props.currentTitle}</Typography>
    </Breadcrumbs>
  );
}
