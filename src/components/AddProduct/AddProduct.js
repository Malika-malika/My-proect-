import React, { useContext, useState } from "react";
import { productsContext } from "../../context/ProductsContext"; 
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { Alert } from "@material-ui/lab";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";


const AddProduct = () => {
  const { addProduct } = useContext(productsContext);
  const [showAlert, setShowAlert] = useState(false);
  const [showError, setShowError] = useState(false);
  const history = useHistory();
  const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(0.9),
        width: "50ch",
      },
    },
  }));
  const classes = useStyles();
  const [product, setProduct] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    color: "",
    material: "",
    madeIn: "",
    img1: "",
    img2: "",
    img3: "",
    video: "",
  });
  const handleValues = (e) => {
    let newProduct = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(newProduct);
  };
  const handleClick = () => {
    if (
      product.name === "" ||
      product.category === "" ||
      product.description === "" ||
      product.price === "" ||
      product.color === "" ||
      product.material === "" ||
      product.madeIn === "" ||
      product.img1 === "" ||
      product.img2 === "" ||
      product.img3 === "" ||
      product.video === "" 
    ) {
      setShowError(true);
      return;
    }
    setProduct({
      name: "",
      category: "",
      description: "",
      price: "",
      color: "",
      material: "",
      madeIn: "",
      img1: "",
      img2: "",
      img3: "",
      video: "",
    });
    addProduct(product, history);
    setShowAlert(true);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-multiline-flexible"
        name="name"
        label="Name"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={product.name}
      />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="category"
        label="Category"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={product.category}
      />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="description"
        label="Description"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={product.description}
      />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="price"
        label="Price"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={product.price}
      />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="color"
        label="Color"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={product.color}
      />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="material"
        label="Material"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={product.material}
      />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="madeIn"
        label="MadeIn"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={product.madeIn}
      />
      <br />      
      <TextField
        id="outlined-multiline-flexible"
        name="img1"
        label="img1"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={product.img1}
      />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="img2"
        label="img2"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={product.img2}
      />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="img3"
        label="img3"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={product.img3}
      />
      <br />
      <TextField
        id="outlined-multiline-flexible"
        name="video"
        label="video"
        multiline
        rowsMax={4}
        variant="outlined"
        onChange={handleValues}
        value={product.video}
      />
      <br />
      {showAlert ? (
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setShowAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          You have added a new product!
        </Alert>
      ) : (
        ""
      )}
      {showError ? (
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setShowError(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Fill in all the fields!
        </Alert>
      ) : (
        ""
      )}
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<AddCircleOutlineIcon />}
        onClick={handleClick}
      >
        Add new product
      </Button>
    </form>
  );
};

export default AddProduct;