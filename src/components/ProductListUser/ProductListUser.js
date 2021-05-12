import React, { useContext, useEffect, useState } from "react";
import { productsContext } from "../../context/ProductsContext"; 
import ProductCard from "./ProductCard"; 
import { Grid } from "@material-ui/core";
import Sidebar from "./SideBar.js";
import Pagination from "@material-ui/lab/Pagination";
import { useHistory } from "react-router-dom";
import "./ProductListUser.css"

const ProductListUser = (props) => {
  const { getProducts, productsData, paginationPages } = useContext(productsContext);
  const history = useHistory();
  const [page, setPage] = useState(getPage());

  function getPage() {
    const search = new URLSearchParams(history.location.search);
    return search.get("_page");
  }

  const handlePage = (e, page) => {
    const search = new URLSearchParams(history.location.search);
    search.set("_page", page);
    history.push(`${history.location.pathname}?${search.toString()}`);
    getProducts(history);
  };

  useEffect(() => {
    getProducts(props.history);
  }, []);

  
  return (
    <div style={{ display: "flex", flexDirection: "row", marginTop: "45px",
    padding: "45px", borderRadius: "40px"}}>
      <Sidebar {...props} />
      <Grid container spacing={3} style={{ margin: "10px" }}>
        {productsData.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
        <Pagination
          onChange={handlePage}
          count={paginationPages}
          color="primary"
          defaultPage={+page}
        />
      </Grid>
    </div>
  );
};

export default ProductListUser;