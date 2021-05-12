import React, { useContext, useEffect, useState } from "react";
import { productsContext } from "../../context/ProductsContext"; 
import ProductCard from "./ProductCard"; 
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Sidebar from "./SideBar.js";
import Pagination from "@material-ui/lab/Pagination";
import { useHistory } from "react-router-dom";
// import "./ProductListAdmin.css"

const ProductListAdmin = (props) => {
  const { getProducts, productsData, paginationPages } = useContext(productsContext);
  const history = useHistory();
  const [page, setPage] = useState();

  
  useEffect(() => {
    getProducts(props.history);
  }, []);
  
  const handlePage = (e, page) => {
    const search = new URLSearchParams(history.location.search);
    search.set("_page", page);
    history.push(`${history.location.pathname}?${search.toString()}`);
    setPage(page);
    getProducts(history);
  };

  function getPage() {
    const search = new URLSearchParams(history.location.search);
    return search.get("_page");
  }
 
  return (
    <>
      {productsData ? (
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <Sidebar {...props} />
                    <Paper>
                    <Grid container spacing={3} style={{ margin: 0 }}>
                        {productsData?.map((item) => (
                            <ProductCard history={history} item={item} key={item.id} />
                        ))}
                    </Grid>
                    <Pagination
                        page={+page}
                        onChange={handlePage}
                        count={paginationPages}
                    />
              </Paper>
                </div>
            ) : (
                <h1>Loading...</h1>
            )}
    </>
  );
};

export default ProductListAdmin;