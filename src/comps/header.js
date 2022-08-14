import React from "react";
import { useState } from "react";
import icon from "../images/icon.png";
import credit from "../images/credit.png";
import "./header.css";
import {Link} from 'react-router-dom';

function Header_nav() {
  return (
    <div id="header_nav" className="flex_display">
      <div className="flex_display">
        <img src={icon} className="icon_image" />
        <p>POKIIMAN!</p>
      </div>
      <div id="page_div" className="flex_display">
        <Link to="/home"><p>All POKE</p></Link>
        <p>MY POKE</p>
        <p>MARKET</p>
        <Link to="/quiz"><p>Quiz</p></Link>
      </div>
      <div id="credit_div" className="flex_display">
        <img src={credit} className="credit_img" />
        <p>500</p>
      </div>
    </div>
  );
}
export default Header_nav;
