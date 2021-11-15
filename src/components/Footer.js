import React from "react";
import "./styles/Footer.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import LanguageIcon from "@material-ui/icons/Language";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore";
import PublicIcon from "@material-ui/icons/Public";

function Footer() {
  return (
    <div className="footer">
      <a href="#top" className="footer__backButton">
        Back to top
      </a>

      <div className="links">
        <ul>
          <h2>Get to Know Us</h2>
          <li>
            <a href="/">Careers</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">About Amazon</a>
          </li>
          <li>
            <a href="/">Sustainability</a>
          </li>
          <li>
            <a href="/">Investor Relations</a>
          </li>
          <li>
            <a href="/">Amazon Devices</a>
          </li>
          <li>
            <a href="/">Amazon Tours</a>
          </li>
        </ul>

        <ul>
          <h2>Make Money with Us</h2>
          <li>
            <a href="/">Sell products on Amazon</a>
          </li>
          <li>
            <a href="/">Sell apps on Amazon</a>
          </li>
          <li>
            <a href="/">Become an Affiliate</a>
          </li>
          <li>
            <a href="/">Advertise Your Products</a>
          </li>
          <li>
            <a href="/">Self-Publish with Us</a>
          </li>
          <li>
            <a href="/">Host an Amazon Hub</a>
          </li>
          <li>
            <a href="/">› See More Make Money with Us</a>
          </li>
        </ul>

        <ul>
          <h2>Amazon Payment Products</h2>
          <li>
            <a href="/">Amazon Business Card</a>
          </li>
          <li>
            <a href="/">Shop with Points</a>
          </li>
          <li>
            <a href="/">Reload Your Balance</a>
          </li>
          <li>
            <a href="/">Amazon Currency Converter</a>
          </li>
        </ul>

        <ul>
          <h2>Let Us Help You</h2>
          <li>
            <a href="/">Amazon and COVID-19</a>
          </li>
          <li>
            <a href="/">Your Account</a>
          </li>
          <li>
            <a href="/">Your Orders</a>
          </li>
          <li>
            <a href="/">Shipping Rates & Policies</a>
          </li>
          <li>
            <a href="/">Returns & Replacements</a>
          </li>
          <li>
            <a href="/">Manage Your Content and Devices</a>
          </li>
          <li>
            <a href="/">Amazon Assistant</a>
          </li>
          <li>
            <a href="/">Help</a>
          </li>
        </ul>
      </div>

      <div className="footer__end">
        <Link to="/">
          <img
            className="end__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>

        <div className="footer__buttons">
          <Button startIcon={<LanguageIcon />} endIcon={<UnfoldMoreIcon />}>
            Language
          </Button>
          <Button startIcon={<AttachMoneyIcon />}>USD - U.S. Dollar</Button>

          <Button startIcon={<PublicIcon />}>United States</Button>
        </div>
      </div>
      <div className="footer__copy">
        <ul>
          <li>
            <a href="/">Conditions of Use</a>
          </li>
          <li>
            <a href="/">Privace Notice</a>
          </li>
          <li>
            <a href="/">Interest-Based ads</a>
          </li>
          <li>
            <h4>© 1996-2021, Amazon.com, Inc. or its affiliates</h4>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
