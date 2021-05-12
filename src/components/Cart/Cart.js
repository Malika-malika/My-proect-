import { CircularProgress } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { productsContext } from "../../context/ProductsContext";
import { calcTotalPrice } from "../../helpers/CalcPrice";
import { Link } from "react-router-dom";


const Cart = () => {
    const { getCart, cart, changeProductCount, deleteFromCart } = useContext(
        productsContext
    );

    useEffect(() => {
        getCart();
    }, []);


    return (
        <div className="cart" style={{backgroundColor: "blue", textAlign: "center", fontSize: "20px"}}>
            <h1>Shopping cart</h1>
            {cart?.products ? (
                <div>
                    {" "}
                    {cart.products.map((elem) => (
                        <div className="items" style={{border: "2px solid black", padding: "20px"}}>
                            <div>
                                <img className="img__product" src={elem.item.img1} style={{width: "150px", marginLeft: "580px"}} />
                            </div>
                            <div className="item">
                                {" "}
                                <div className="name">
                                    Name: {elem.item.name}
                                </div>
                                <div className="price">
                                    Price: {elem.item.price}
                                </div>
                            </div>
                            <div className="item__count">
                                <div className="count">Count: </div>
                                <input
                                    className="item__count"
                                    onChange={(e) =>
                                        changeProductCount(
                                            e.target.value,
                                            elem.item.id
                                        )
                                    }
                                    type="number"
                                    value={elem.count}
                                />
                            </div>
                            <div className="subprice">
                                <div className="price__subprice">
                                    {" "}
                                    <div className="item__subprice">
                                        SubPrice:{" "}
                                    </div>
                                    <div>$ {elem.subPrice} </div>
                                </div>
                                <div>
                                    <button style={{padding: "10px"}}
                                        onClick={() =>
                                            deleteFromCart(elem.item.id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <h4>
                        Total: ${" "} {calcTotalPrice(cart.products)} 
                        <Link to="/payment">
                            <button className="buy-btn" style={{padding: "10px"}}>Buy</button>
                        </Link>
                    </h4>
                </div>
            ) : (
                <CircularProgress />
            )}
        </div>
    );
};
export default Cart;