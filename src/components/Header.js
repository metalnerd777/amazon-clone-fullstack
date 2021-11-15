import React from "react";
import "./styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import RoomIcon from "@material-ui/icons/Room";
import { Link } from "react-router-dom";
import { useStateValue } from "../dataLayer/StateProvider";
import { auth } from "../config/firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <RoomIcon className="header__navIcon" />
      <div className="header__option">
        <span className="header__optionLineOne">Deliver to</span>
        <span className="header__optionLineTwo">Chile</span>
      </div>

      <div className="header__search">
        <div className="header__searchOption">
          <select name="" id="">
            <option>All</option>
            <option>Arts & Crafts</option>
            <option>Automotive</option>
            <option>Beauty & Personal Care</option>
            <option>Books</option>
            <option>Computer</option>
            <option>Digital Music</option>
            <option>All Departments</option>
          </select>
        </div>

        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__language">
        <img
          className="header__logo"
          src="https://icons.iconarchive.com/icons/wikipedia/flags/512/US-United-States-Flag-icon.png"
          alt=""
        />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello {user ? user.email : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {" "}
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
