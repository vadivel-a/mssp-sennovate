import React, { useState, useEffect } from "react";
import Toolbar from '@material-ui/core/Toolbar';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import ProductDataService from "../../services/ProductService";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { TextField, Button, Grid, ListItem, withStyles } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    margin:10,
    position:'relative'
  },
  search: {
      marginTop: "15px"
  }
}));
const List = () => {
  const classes = useStyles();
  const [Products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveProducts();
  }, []);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveProducts = () => {
    ProductDataService.getAll()
      .then(response => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveProducts();
    setCurrentProduct(null);
    setCurrentIndex(-1);
  };

  const setActiveProduct = (Product, index) => {
    setCurrentProduct(Product);
    setCurrentIndex(index);
  };

  const removeAllProducts = () => {
    ProductDataService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    ProductDataService.findByTitle(searchTitle)
      .then(response => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const breadcrumbList = [
    {title:"Home", to:"/"},
    {title:"Products", to:"/"},
    {title:"Products", to:'current'}
  ];
  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <Toolbar />
        <Breadcrumbs currentTitle="Products" pageTitle="Products" breadcrumbList={breadcrumbList} />

        <Grid container>
                  <Grid className={classes.search} item sm={12} xs={12} md={12} xl={12} lg={12}>
                    <TextField
                      label="Search by title"
                      value={searchTitle}
                      onChange={onChangeSearchTitle}
                    />
                    <Button
                      size="small"
                      variant="outlined"
                      className={classes.textField}
                      onClick={findByTitle}>
                      Search
                    </Button>
                  </Grid>
                  <Grid item md={4}>
                    <h2>Products List</h2>

                    <div className="list-group">
                      {Products &&
                        Products.map((Product, index) => (
                          <ListItem
                            selected={index === currentIndex}
                            onClick={() => setActiveProduct(Product, index)}
                            divider
                            button
                            key={index}>
                            {Product.title}
                          </ListItem>
                        ))}
                    </div>

                    <Button
                      className={`${classes.button} ${classes.removeAll}`}
                      size="small"
                      color="secondary"
                      variant="contained"
                      onClick={removeAllProducts}
                    >
                      Remove All
                  </Button>
                  </Grid>
                  <Grid item md={8}>
                    {currentProduct ? (
                      <div className={classes.product}>
                        <h4>Product</h4>
                        <div className={classes.detail}>
                          <label>
                            <strong>Title:</strong>
                          </label>{" "}
                          {currentProduct.title}
                        </div>
                        <div className={classes.detail}>
                          <label>
                            <strong>Description:</strong>
                          </label>{" "}
                          {currentProduct.description}
                        </div>
                        <div className={classes.detail}>
                          <label>
                            <strong>Status:</strong>
                          </label>{" "}
                          {currentProduct.published ? "Published" : "Pending"}
                        </div>

                        <Link
                          to={"/Products/" + currentProduct.id}
                          className={classes.edit}
                        >
                          Edit
                      </Link>
                      </div>
                    ) : (
                        <div>
                          <br />
                          <p className={classes.product}>Please click on a Product...</p>
                        </div>
                      )}
                  </Grid>
                </Grid>

    </main>
  </div>
  );
};

export default List;
