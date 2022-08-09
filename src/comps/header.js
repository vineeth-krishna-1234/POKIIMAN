import React from "react";
import { useState } from "react";
import icon from "../images/icon.png";
import credit from "../images/credit.png";
import "./header.css";

function Header_nav() {
  return (
    <div id="header_nav" className="flex_display">
      <div className="flex_display">
        <img src={icon} className="icon_image" />
        <p>POKIIMAN!</p>
      </div>
      <div id="page_div" className="flex_display">
        <p>All POKE</p>
        <p>MY POKE</p>
        <p>MARKET</p>
      </div>
      <div id="credit_div" className="flex_display">
        <img src={credit} className="credit_img" />
        <p>500</p>
      </div>
    </div>
  );
}
export default Header_nav;
