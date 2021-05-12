import React from 'react';
import "./Iphone.css";
import Phone from "../../assets/images/apple.jpg"


const Iphone = () => {
   return (
      <div>
         <div className="container__iphone">
            <img src={Phone} alt="iphone" />
         </div>
      </div>
   );
};

export default Iphone;