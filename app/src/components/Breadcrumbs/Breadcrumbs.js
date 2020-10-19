import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {Grid} from '@material-ui/core';
import {Link } from "react-router-dom";

export default function SimpleBreadcrumbs(props) {

  const breadcrumbList = () =>{
    let ret = Object.keys(props.breadcrumbList).map((key)=>{
      if(props.breadcrumbList[key]['to'] !== 'current'){
        return(<Link style={{'color':'#888'}}  to={props.breadcrumbList[key]['to']} >{props.breadcrumbList[key]['title']}</Link>)
      }else{
        return(<Typography color="textPrimary">{props.breadcrumbList[key]['title']}</Typography>);
      }
    })
    return ret;
  }
  return (
    <Grid container style={{'margin':'10px 0'}}>
      <Grid item xs={6}>
        <Breadcrumbs aria-label="breadcrumb" style={{'margin-bottom':'0px','color':'#000'}} >
          {breadcrumbList()}
        </Breadcrumbs>
      </Grid>
      <Grid item xs={6} align="right">
        <Typography variant="h5" style={{'fontSize':'20px'}} >{props.pageTitle}</Typography>
      </Grid>
    </Grid>
  );
}
