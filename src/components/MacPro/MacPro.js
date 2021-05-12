import React from 'react';
import "./MacPro.css";
import Side from "../../assets/images/side1.jpg";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Link } from 'react-router-dom';

const MacPro = () => {
   return (
      <div>
         <Link to="mac" style={{textDecoration: 'none'}}>
            <div className="main__imac">
               <h2 className="imac__title">iMac</h2>
               <h3 className="imac__title1">Say hello.</h3>
               <p className="imac__par">Order 4.30 | Available second half of May</p>
               <a className="imac__link">Learn more <ArrowForwardIosIcon/> </a> 
               <a className="imac__link">View pricing <ArrowForwardIosIcon/> </a>
               <p className="imac"><img className="imac__img" style={{width: '1439', height: '629'}} src={Side} alt="mac" /></p>   
            </div>
         </Link>
      </div>
   );
};

export default MacPro;