import React from "react";
import { Avatar } from "@material-ui/core";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          className="header__leftLogo"
          src="https://pngimg.com/uploads/twitch/twitch_PNG6.png"
          alt="twitch logo"
        />
        <h2>Following</h2>
        <h2>Browse</h2>
        <div className="header__verticalLine"></div>
        <h2>Esports</h2>
        <h2>Music</h2>
        <i class="fas fa-ellipsis-h"></i>
      </div>
      <div className="header__center">
        <input type="text" placeholder="Search" />
        <div className="header__centerLogoContainer">
          <i className="fas fa-search"></i>
        </div>
      </div>
      <div className="header__right">
        <div className="header__rightContainer">
          <i className="fas fa-crown"></i>
          <i className="fas fa-inbox"></i>
          <i className="fas fa-comment-alt"></i>
          <div className="header__rightBits">
            <i className="fas fa-gem"></i>
            <h4>Get Bits</h4>
          </div>
          <Avatar />
        </div>
      </div>
    </div>
  );
}

export default Header;
