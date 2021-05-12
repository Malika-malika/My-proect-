import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import AddProduct from "../AddProduct/AddProduct";
import ProductsListAdmin from "../ProductListAdmin/ProductsListAdmin";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ShopIcon from "@material-ui/icons/Shop";
import Order from "../Order/Order";
import {useHistory} from 'react-router-dom';
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));
const Admin = () => {
  const history = useHistory()
  function routesAdmin(comp) {
    if (comp === "add") {
      return <AddProduct />;
    } else if (comp === "list") {
      return <ProductsListAdmin history={history} />;
    } else if (comp === "order") {
      return <Order />;
    }
  }
  const [comp, setComp] = useState("add");
  const classes = useStyles();
  return (
    <Paper elevation={3}>
      <Paper elevation={3}>
        <Button
          onClick={() => setComp("add")}
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<AddCircleIcon />}
        >
          Add product
        </Button>
        <Button
          onClick={() => setComp("list")}
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<ShopIcon />}
        >
          List of products
        </Button>
        <Button
          onClick={() => {
            setComp("order");
          }}
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<EventAvailableIcon />}
        >
          Order
        </Button>
      </Paper>

      <div style={{ marginTop: "10px" }}>{routesAdmin(comp)}</div>
    </Paper>
  );
};

export default Admin;