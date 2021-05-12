import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { productsContext } from "../../context/ProductsContext";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "30px",
    "& .MuiTextField-root": {
      margin: theme.spacing(0.5),
      width: "60vw",
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

export default function Edit() {
  const { productToEdit, editProduct: fetchProduct, saveEditedProduct } = useContext(
    productsContext
  );
  const [editProduct, setEditProduct] = useState(productToEdit);
  const [check, setCheck] = useState(false);
  const classes = useStyles();
  const params = useParams();
  const [openSpinner, setOpenSpinner] = React.useState(true);

  useEffect(() => {
    setEditProduct(productToEdit);
    if (productToEdit) {
      setCheck(true);
    }
  }, [productToEdit]);

  const handleCloseSpinner = () => {
    setOpenSpinner(false);
  };

  useEffect(() => {
    fetchProduct(params.id);
  }, []);

  const handleValues = (e) => {
    let editedProduct = {
      ...editProduct,
      [e.target.name]: e.target.value,
    };
    setEditProduct(editedProduct);
  };

  return (
    <>
      {!check ? (
        <div>
          <Backdrop
            className={classes.backdrop}
            open={openSpinner}
            onClick={handleCloseSpinner}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
      ) : (
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="outlined-multiline-flexible"
            name="name"
            label="Name"
            // multiline
            // rowsMax={4}
            variant="outlined"
            value={editProduct.name}
            onChange={handleValues}
          />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="category"
            label="Category"
            multiline
            rowsMax={4}
            variant="outlined"
            value={editProduct.category}
            onChange={handleValues}
          />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="description"
            label="Description"
            multiline
            rowsMax={4}
            variant="outlined"
            value={editProduct.description}
            onChange={handleValues}
          />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="price"
            label="Price"
            multiline
            rowsMax={4}
            variant="outlined"
            value={editProduct.price}
            onChange={handleValues}
          />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="color"
            label="Color"
            multiline
            rowsMax={4}
            variant="outlined"
            value={editProduct.color}
            onChange={handleValues}
          />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="material"
            label="Material"
            multiline
            rowsMax={4}
            variant="outlined"
            value={editProduct.material}
            onChange={handleValues}
          />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="madeIn"
            label="MadeIn"
            multiline
            rowsMax={4}
            variant="outlined"
            value={editProduct.madeIn}
            onChange={handleValues}
          />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="img1"
            label="Img1"
            multiline
            rowsMax={4}
            variant="outlined"
            value={editProduct.img1}
            onChange={handleValues}
          />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="img2"
            label="img2"
            multiline
            rowsMax={4}
            variant="outlined"
            value={editProduct.img2}
            onChange={handleValues}
          />

          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="img3"
            label="img3"
            multiline
            rowsMax={4}
            variant="outlined"
            value={editProduct.img3}
            onChange={handleValues}
          />
          <br />
          <TextField
            id="outlined-multiline-flexible"
            name="video"
            label="video"
            multiline
            rowsMax={4}
            variant="outlined"
            value={editProduct.video}
            onChange={handleValues}
          />
          <br />
          <Link to="/modal">
            {" "}
            <Button
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              onClick={saveEditedProduct(editProduct)}
            >
              Save
            </Button>
          </Link>
        </form>
      )}
    </>
  );
}