import React from 'react';
import "./Ipad.css";
import Video1 from "../../assets/video/vi.mp4";

const Ipad = () => {
   return (
      <div>
         <div className="main-video">
               <video
                  className="video-v" autoPlay loop muted>
                  <source src={Video1} type="video/mp4"/>
               </video>
            </div>
      </div>
   );
};

export default Ipad;