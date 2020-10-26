import React,{useEffect,useContext} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Button,TextField } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {Link } from "react-router-dom";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  formControl: {
      marginTop: theme.spacing(2),
      minWidth: 220,
  }
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    display: 'inline-block',
  },
}))(MuiDialogActions);

export default function SendMailModel({isopen, onCartModelclose}) {
  const [open, setOpen] = React.useState(isopen);
  const [usermail, setUsermail] = React.useState(isopen);
  const [submit, setSubmit] = React.useState({});
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    onCartModelclose(false);
  };

  const handleSubmit = () => {

  }

  function renderdialogcontent(){
    return(
      <>
    <DialogContent dividers>
      <Typography gutterBottom variant="body2" >
      Thanks for you interest Sennovate Managed Security Services our representative will contact you shortly to provide best managed security services in Bay area
      </Typography>
      <TextField
        margin="dense"
        id="mail"
        label="Enter the mail"
        type="mail"
        fullWidth
        color='secondary'
        style={{'max-width':'200px','width':'100%'}}
        onChange={(e) => {setUsermail(e.target.value);}}
      />
    </DialogContent>
    <DialogActions >
      <Button onClick={handleClose} color="secondary" variant="outlined">
        Cancel
      </Button>
      <Button onClick={handleSubmit} color="secondary" variant="outlined">
        <ShareIcon />Share
      </Button>
    </DialogActions>
    </>
    )
  }

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open} fullWidth='true'
        align='center'
        maxWidth='xs'>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Share to me!
        </DialogTitle>
        {renderdialogcontent()}
      </Dialog>
    </div>
  );
}
