import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
//import Logo from "../../assets/images/brandlogoblack.svg"
import { IconButton } from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { productsContext } from "../../context/ProductsContext";
import Logo from "../../assets/images/mac.svg";

const Header = () => {

    const { cartLength } = useContext(productsContext);

    return (
    <div>
      <div className="header">
        <div className="header__container">
          <div className="navbar">
            <div className="navbar__regisrt">
              <Link to="/cart">
                <Badge badgeContent={cartLength} color="secondary">
                  <ShoppingCartIcon style={{ color: "white" }}/>
                </Badge>
              </Link>
              <Link to="/login">
                <span className="login">Log In</span>
              </Link>
              <Link to="/signup">

                <button className="signup">Sign up</button>
              </Link>
            </div>

            <div className="header__navbar">
              <div className="hamburger-menu">
                <input type="checkbox" id="menu__toggle" />
                <label htmlFor="menu__toggle" className="menu__btn">
                  <span></span>
                </label>
                  <ul className="navbar__menu menu__box">
                    <li><Link to="/" style={{textDecoration: 'none'}}><img className="navbar__logo" src={Logo} alt="logo"/></Link></li>
                    <li><Link to="/mac" style={{textDecoration: 'none', color: 'white'}}>Mac</Link></li>
                    <li><Link to="/ipad" style={{textDecoration: 'none', color: 'white'}}>iPad</Link></li>
                    <li><Link to="/iphone" style={{textDecoration: 'none', color: 'white'}}>iPhone</Link></li>
                    <li><Link to="/shop" style={{textDecoration: 'none', color: 'white'}}>Shop</Link></li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
