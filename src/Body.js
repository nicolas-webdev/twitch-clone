import React from "react";
import Profile from "./Profile";
import "./Body.css";

const Body = () => {
  return (
    <div className="body">
      <div className="body--left">
        <Profile />
      </div>
      <div className="body_rightPlaceHolder"></div>
    </div>
  );
};

export default Body;
