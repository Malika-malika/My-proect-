import React, { useContext, useEffect } from "react";
import { productsContext } from "../../context/ProductsContext";

const Order = () => {

  const { getOrders, ordersData } = useContext(productsContext);
  useEffect(() => {
    getOrders();
    console.log(ordersData)
  }, []);
  
  return (
    <div className="orders">
      {ordersData ? (
        <div>
          {" "}
          {ordersData.map((item) => (
            <div style={{ border: "1px solid black", margin: 20, padding: 20 }}>
              {" "}
              <div>FirstName : {item.firstName}</div>
              <div>LastName : {item.lastName}</div>
              <div>Address1 : {item.address1}</div>
              <div>Address2 : {item.address2}</div>
              <div>Country : {item.country}</div>
              <div>City : {item.city}</div>
              <div>State : {item.state}</div>
              <div>Zip : {item.zip}</div>
              <div>CardName : {item.cardName}</div>
              <div>CardNumber : {item.cardNumber}</div>
              <div>CardCvc : {item.cardCvc}</div>
              <div>CardExpiry :{item.cardExpiry}</div>
              <div>
                Order :{" "}
                {/*{item?.orders.map((elem) => (
                  <div>
                    {" "}
                    <div>Name : {elem.item.name}</div>
                    <div>Price : {elem.item.price}</div>
                    <div>SubPrice : {elem.subPrice}</div>
                  </div>
                ))}*/}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
};

export default Order;
