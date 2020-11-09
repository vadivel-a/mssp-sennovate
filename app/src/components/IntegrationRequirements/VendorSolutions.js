import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Grid,Paper,Typography,List,ListItem} from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import {useParams} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  listitem:{
    fontSize:'14px',
    padding:'5px 0'
  }
}));

export default function VendorSolutions(data) {
  const classes = useStyles();
  let params = useParams();
  const tabData = data['data']['productData'][0]['Workforce Identity Products'][0]['SSO'][1]['tiers'];

  function featuresList(data){
    return Object.keys(data).map((key)=>{
      return(<ListItem className={classes.listitem}><DoneIcon fontSize="small" />{data[key]['featureText']}
      </ListItem>);
    });
  }
  function tabPanelContent(features){
    return(<div>{
        Object.keys(features).map((key)=>{
          return(<div alignItems="flex-start" key={key}><Typography gutterBottom variant="h6" style={{'marginBottom':'0','marginTop':'15px'}}>{features[key]['featureText']}</Typography><List>{featuresList(features[key]['children'])}</List></div>);
        })
      }
    </div>)
  }
  return (
    <Paper elevation={0}  >
    <Typography gutterBottom variant="h4" >Available Solutions/Products</Typography>
    <Grid container spacing={3}>
            {

            Object.keys(tabData).map((key)=>{
              return(

              <Grid item xs={6}>
              <Paper elevation={0}  >
                <Grid item xs={12}>{tabPanelContent(tabData[key]['features'])}</Grid>
                </Paper>
              </Grid>
              )
            })

            }
            </Grid>
    </Paper>
  );
}
