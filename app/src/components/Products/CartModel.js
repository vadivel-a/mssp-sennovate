import React,{useEffect,useContext} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Button,TextField } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {CartContext} from '../Context/CartContext';
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
    padding: theme.spacing(1),
    display: 'inline-block',
  },
}))(MuiDialogActions);

export default function CartModel({isopen, onCartModelclose, data}) {
  const [cart, setCart] = useContext(CartContext);
  const [open, setOpen] = React.useState(isopen);
  const [usercount, setUsercount] = React.useState(1);
  const [submit, setSubmit] = React.useState({});
  const [renderdialogcontent, setRednerDialogContent] = React.useState();

  const addToCart = ()=>{
  	const item={name:data.name,price:data.price, type:data.type, user:usercount}
  	setCart(curr=>[...curr, item]);
    if(usercount > 0){
      setRednerDialogContent(cartAddedDialogContent);
    }
  }
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    onCartModelclose(false);
  };
  useEffect(() => {
    setRednerDialogContent(defaultDialogContent);
  },[usercount]);
  function defaultDialogContent(){
    return(
      <>
    <DialogContent dividers>
      <Typography gutterBottom variant="h2">
        ${data.price}
      </Typography>
      <Typography gutterBottom variant="body2" >
      Per User / Per {data.type}
      </Typography>
      <TextField
        defaultValue='1'
        margin="dense"
        id="no_user"
        label="Number of user"
        type="number"
        fullWidth
        color='secondary'
        style={{'max-width':'200px','width':'100%'}}
        onChange={(e) => {setUsercount(e.target.value);}}
      />
    </DialogContent>
    <DialogActions >
      <Button onClick={handleClose} color="secondary" variant="outlined">
        Cancel
      </Button>
      <Button onClick={addToCart} color="secondary" variant="outlined">
        <ShoppingCartIcon />Add Cart
      </Button>
    </DialogActions>
    </>
    )
  }
  const cartAddedDialogContent=()=>{
    return(
    <>
    <DialogContent dividers>
      <Typography gutterBottom variant="h2" style={{'fontSize':'2.75rem'}}>
        {usercount} Users added to cart!
      </Typography>
    </DialogContent>
    <DialogActions >
      <Button onClick={handleClose} color="secondary" variant="outlined">
        Continue to Products
      </Button>
      <Link to={'/cart'} >
      <Button color="secondary" variant="outlined" component="button">
        Proceed to Cart
      </Button>
      </Link>
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
          {data.name} / Per {data.type}
        </DialogTitle>
        {renderdialogcontent}
      </Dialog>
    </div>
  );
}
