import React, { useContext } from "react";
import { productsContext } from "../../context/ProductsContext";

const Details = () => {

   const { detailsData } = useContext(productsContext);

   return (
      <div>
         {detailsData ? (
               <div className="container" style={{padding: "15px"}} >
               <div className="grid-detail" style={{textAlign: "center", padding: "15px"}}>
                  <span>
                     <img style={{width: "600px"}} src={detailsData.img1} style={{width: "400px"}} alt="watch" className="detail-size"/>
                  </span>
                  <span className="detail-block">
                     <h2>{detailsData.name}</h2>
                     <p>{detailsData.display}, {detailsData.memory}, {detailsData.price}</p>
                  </span>
               </div>
               <div>
                  <h2 className="title" style={{textAlign: "center", padding: "15px"}}>Description</h2>
                  <p className="paragraf">{detailsData.description}</p>
                  <ul classname="list">
                     <li>Display: {detailsData.dislay}</li>
                     <li>Memory: {detailsData.memory}</li>
                     <li>Price: {detailsData.price}</li>
                  </ul>
               </div>
            </div>
         ) : (
               <h1>loading</h1>
         )}
      </div>
   );
};

export default Details;
