import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { productsContext } from "../../context/ProductsContext";
import "./ProductCard.css";

const ProductCard  = ({ item }) => {
  const { showDetails, addProductToCart, checkProductInCart } = useContext(productsContext);
  console.log(productsContext);
  return (
      <Link to="/details">
         <div class = "product">
                        <div class = "product-content">
                           <div class = "product-img">
                              <img src={item.img1} alt = "product image"/>
                           </div>
                           <div class = "product-btns">
                              <Link to='/cart'>
                              <button type = "button" class = "btn-cart" 
                              onClick = {() => addProductToCart(item)}
                              color={checkProductInCart(item.id) ? "secondary" : ""}
                              > add to cart
                                    <span><i class = "fas fa-plus"></i></span>
                              </button>
                              </Link>
                              <Link to="/payment">
                              <button type = "button" class = "btn-buy" > buy now
                                    <span><i class = "fas fa-shopping-cart"></i></span>
                              </button>
                              </Link>
                           </div>
                        </div>
                        <div class = "product-info">
                           <div class = "product-info-top">
                              <h2 class = "sm-title">{item.name}</h2>
                           </div>
                           <a href = "#" class = "product-name">{item.color}, {item.material}</a>
                           <p class = "product-price">$ {item.price}</p>
                           <Link to="/details">
                           <button type = "button" class = "btn-buy"
                           onClick={() => showDetails(item.id)} > details
                              <span><i class = "fas fa-shopping-cart"></i></span>
                            </button>
                           </Link>
                        </div>
                  </div>
      </Link>    
    );
  };

  export default ProductCard;


