import React, { useContext, useState, useEffect } from "react";
import { productsContext } from "../../context/ProductsContext";
//import Carousel from "./Carousel";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import IconButton from "@material-ui/core/IconButton";
import CallIcon from "@material-ui/icons/Call";
import "./Details.css";
import { AuthContext } from "../../context/AuthContext";
import { useParams } from "react-router";
import Input from "@material-ui/core/Input";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Rating from "@material-ui/lab/Rating";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import BookmarkIcon from "@material-ui/icons/Bookmark";

const Details = ({ history }) => {
   const {
      detailsData,
      addComment,
      productToComment,
      saveComment,
      showDetails,
      //addLike,
      //addRating,
      addFavourites,
      addProductToCart,
      checkProductInCart,
      getProducts,
   } = useContext(productsContext);

   const { currentUser } = useContext(AuthContext);
   const params = useParams();
   const [commentProduct, setCommentProduct] = useState(productToComment);
   const [newComments, setNewComments] = useState([]);
   const [check, setCheck] = useState(false);

   useEffect(() => {
      setCommentProduct(productToComment);
      if (productToComment) {
         setCheck(true);
      }
   }, [productToComment]);

   useEffect(() => {
      showDetails(params.id);
   }, []);

   // useEffect(() => {
   //   checkRating();
   // }, []);

   const handleValues = (e) => {
      let newComments = [
         ...commentProduct.comments,
         {
         email: currentUser.email,
         comment: e.target.value,
         date: new Date().toLocaleString(),
         },
      ];
      setNewComments(newComments);
   };

   //const likes = () => {
   //   let filteredLikes = detailsData.likes.filter(
   //      (item) => item.email === currentUser.email
   //   );
   //   if (filteredLikes.length > 0) {
   //      let newLikes = detailsData.likes.filter(
   //      (item) => item.email !== currentUser.email
   //      );
   //      addLike(newLikes, detailsData.id);
   //      return;
   //   } else {
   //      let newLikes = [
   //      ...detailsData.likes,
   //      {
   //         email: currentUser.email,
   //      },
   //      ];
   //      addLike(newLikes, detailsData.id);
   //   }
   //};

   //const checkLikes = () => {
   //   console.log(detailsData, ' details data')
   //   let likesData = detailsData.likes.filter(
   //      (item) => item.email === currentUser.email
   //   );
   //   return likesData.length > 0 ? true : false;
   //};

   //const handleRating = (e) => {
   //   let rating = detailsData.rating.filter(
   //      (item) => item.email === currentUser.email
   //   );

   //   if (rating.length > 0) {
   //      let newRating = detailsData.rating.filter(
   //      (item) => item.email !== currentUser.email
   //      );

   //      let rate = {
   //      email: currentUser.email,
   //      rating: e.target.value,
   //      };

   //      newRating.push(rate);
   //      addRating(newRating, detailsData.id);
   //      return;

   //   } else {
   //      let newRating = [
   //      ...detailsData.rating,
   //      {
   //         email: currentUser.email,
   //         rating: e.target.value,
   //      },
   //      ];

   //      addRating(newRating, detailsData.id);
   //      checkRating();

   //   }
   //};

   //const checkRating = () => {
   //   let rating = detailsData.rating.filter(
   //      (item) => item.email === currentUser.email
   //   );

   //   if (rating.length < 0) {
   //      return 1;
   //   } else if (rating.length > 0) {
   //      return rating[0].rating;
   //   }
   //};

   const handleFavourites = () => {
      let filteredFavourites = detailsData.favourites.filter(
         (item) => item.email === currentUser.email
      );
      if (filteredFavourites.length > 0) {
         let newFavourites = detailsData.favourites.filter(
         (item) => item.email !== currentUser.email
         );

         addFavourites(newFavourites, detailsData.id);
         getProducts(history);
         return;

      } else {
         let newFavourites = [
            ...detailsData.favourites,
            {
            email: currentUser.email,
            },
         ];
         addFavourites(newFavourites, detailsData.id);
         getProducts(history);
      }
   };

   const checkFavourites = () => {
      let favouritesData = detailsData.favourites.filter(
         (item) => item.email === currentUser.email
      );
      return favouritesData.length > 0 ? true : false;
   };

   return (
      <div>
         {" "}
         {detailsData ? (
         <div>
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
               <div>
                  {" "}
                  <IconButton
                     onClick={() => handleFavourites()}
                     style={{ color: "black" }}
                  >
                     {" "}
                     {checkFavourites() ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                     {detailsData.favourites.length}
                  </IconButton>
               </div>
            </div>
       
            <hr size="16" />
            <div className="comments">
               <h6>Comments ({detailsData.comments?.length})</h6>
               <input
               id="inpCom"
               placeholder="comment..."
               onFocus={() => addComment(detailsData.id)}
               name="comment"
               onChange={handleValues}
               />
               <IconButton
               onClick={() => saveComment(newComments, detailsData.id)}
               className="btn_post"
               >
               <ChatBubbleOutlineIcon />
               post
               </IconButton>

               <div>
               {detailsData.comments ? (
                  <div>
                     {detailsData.comments.map((item) => (
                     <div className="comment">
                        <hr size="16" />
                        <div className="comment_email_date">
                           <div className="comment_email">{item.email}</div>
                           

                           <div className="comment_date">{item.date}</div>
                        </div>{" "}
                        <br />
                        <div>{item.comment}</div>
                        <br />
                        <hr size="16" />
                     </div>
                     ))}
                  </div>
               ) : (
                  <h1>comments</h1>
               )}
               </div>
            </div>
         </div>
         ) : (
         <h1>loading</h1>
         )}
      </div>
   );
   };

export default Details;
