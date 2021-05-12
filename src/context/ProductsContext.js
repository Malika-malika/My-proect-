import React, { useReducer } from "react";
import axios from "axios";
import {
  calcSubPrice,
  calcTotalPrice,
  getCountProductsInCart,
} from "../helpers/CalcPrice";
import { useHistory } from "react-router-dom";

export const productsContext = React.createContext();
const INIT_STATE = {
  productsData: [],
  paginationPages: 1,
  productToEdit: null,
  detailsData: null,
  productToComment: null,
  cartLength: getCountProductsInCart(),
  ordersData: []
};

const reducer = (state = INIT_STATE, action) => {
  // const history = useHistory()
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        productsData: action.payload.data,

        paginationPages: Math.ceil(action.payload.headers["x-total-count"] / 4),
      };
    case "EDIT_PRODUCT":
      return { ...state, productToEdit: action.payload };
    case "DETAILS_PRODUCT":
      return { ...state, detailsData: action.payload };
      case "COMMENT_PRODUCT":
        return { ...state, productToComment: action.payload };
    case "GET_CART":
      return { ...state, cart: action.payload };
    case "GET_ORDERS":
      return { ...state, ordersData: action.payload };
    case "CHANGE_CART_COUNT":
      return { ...state, cartLength: action.payload };
    default:
      return state;
  }
};

const ProductsContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getProducts(history) {
    console.log('here')
    const search = new URLSearchParams(history.location.search);
    // console.log(history.location.search);
    search.set("_limit", 4);
    history.push(`${history.location.pathname}?${search.toString()}`);
    let res = await axios.get(
      `http://localhost:8000/products${window.location.search}`
    );
    dispatch({
      type: "GET_PRODUCTS",
      payload: res,
    });
  }
  
  const addProduct = (newProduct, history) => {
    axios.post("http://localhost:8000/products", newProduct);
    getProducts(history);
  };

  const deleteProduct = async (id, history) => {
    await axios.delete(`http://localhost:8000/products/${id}`);
    getProducts(history);
  };

  const editProduct = async (id) => {
    let { data } = await axios(`http://localhost:8000/products/${id}`);
    dispatch({
      type: "EDIT_PRODUCT",
      payload: data,
    });
  };

  const saveEditedProduct = async (editedProduct) => {
    await axios.patch(`http://localhost:8000/products/${editedProduct.id}`, editedProduct);
  };

  const showDetails = async (id) => {
    let { data } = await axios(`http://localhost:8000/products/${id}`);
    dispatch({
      type: "DETAILS_PRODUCT",
      payload: data,
    });
  };

  const addComment = async (id) => {
    let { data } = await axios(`http://localhost:8000/products/${id}`);
    dispatch({
      type: "COMMENT_PRODUCT",
      payload: data,
    });
  };

  const saveComment = async (commentedProduct, id) => {
    await axios.patch(`http://localhost:8000/products/${id}`, {
      comments: commentedProduct,
    });

    showDetails(id);
    document.getElementById("inpCom").value = "";
  };
 


  function addProductToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }

    let newProduct = {
      item: product,
      count: 1,
      subPrice: product.price,
    };

    let filteredCart = cart.products.filter(
      (elem) => elem.item.id === product.id
    );

    if (filteredCart.length > 0) {
      cart.products = cart.products.filter(
        (elem) => elem.item.id !== product.id
      );
    } else {
      cart.products.push(newProduct);
    }

   
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch({
      type: "CHANGE_CART_COUNT",
      payload: cart.products.length,
    });
  }

  function getCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    dispatch({
      type: "GET_CART",
      payload: cart,
    });
  }
  function changeProductCount(count, id) {
    let cart = JSON.parse(localStorage.getItem("cart"));

    cart.products = cart.products.map((elem) => {
      if (elem.item.id === id) {
        elem.count = count;
        elem.subPrice = calcSubPrice(elem);
      }
      return elem;
    });

    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
  }

  function checkProductInCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    let newCart = cart.products.filter((elem) => elem.item.id === id);
    return newCart.length > 0 ? true : false;
  }

  function deleteFromCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    cart.products = cart.products.filter((item) => {
      return item.item.id !== id;
    });
    localStorage.setItem("cart", JSON.stringify(cart));
    getCart();
    dispatch({
      type: "CHANGE_CART_COUNT",
      payload: cart.products.length,
    });
  }

  const addOrder = (newOrder) => {
    axios.post("http://localhost:8000/orders", newOrder);
  };

  async function getOrders() {
    let { data } = await axios.get(`http://localhost:8000/orders`);
    console.log(data, 'order')
    dispatch({
      type: "GET_ORDERS",
      payload: data,
    });
  }


  return (
    <productsContext.Provider
      value={{
        productsData: state.productsData,
        paginationPages: state.paginationPages,
        productToEdit: state.productToEdit,
        productToComment: state.productToComment,
        detailsData: state.detailsData,
        cart: state.cart,
        cartLength: state.cartLength,
        ordersData: state.ordersData,
        getProducts,
        addProduct,
        deleteProduct,
        editProduct,
        saveEditedProduct,
        showDetails,
        addComment,
        saveComment,
        addProductToCart,
        getCart,
        changeProductCount,
        checkProductInCart,
        deleteFromCart,
        addOrder,
        getOrders
      }}
    >
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
