import React from 'react';
import "./IpadPro.css";
import Ipadp from "../../assets/images/ipad-pro.jpg";
import { Link } from '@material-ui/core';

const IpadPro = () => {
   return (
      <>
      <Link to="/ipad">
         <div className="pro">
            <div>
               <img className="ipadp" src={Ipadp} alt="ipadp"/>
               </div>
               <div className="ipadpro">
                  <div>
                     <h1 className="ipad">Ipad Pro</h1>
                     <span className="ipad">Supercharged by the</span>
                  </div>
                  <div>
                     <span className="ipad">Apple M1 chip.</span>
                     </div>
               </div>
         </div>
      
      </Link>
      </>
   );
};

export default IpadPro;