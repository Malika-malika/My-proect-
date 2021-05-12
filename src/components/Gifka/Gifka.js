import React from 'react';
import "./Gifka.css";
import Vid from "../../assets/video/large.mp4";

const Gifka = () => {
   return (
      <div>
         <div className="main__video">
               <video
                  className="video-v" autoPlay loop muted>
                  <source src={Vid} type="video/mp4"/>
               </video>
            </div>
      </div>
   );
};

export default Gifka;