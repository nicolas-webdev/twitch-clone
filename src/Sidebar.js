import React from "react";
import "./Sidebar.css";
import Channel from "./Channel";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h5>FOLLOWED CHANNELS</h5>
        <Channel
          avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/5ce44622-21cf-4939-8329-c63b5028ff2d-profile_image-50x50.png"
          ss="https://static-cdn.jtvnw.net/previews-ttv/live_user_confusedbread-440x248.jpg"
          name="Mahjong Channel"
          followers="816k"
        />
        <Channel
          avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/f8f6f177-7e57-42f9-a14a-8c09205da650-profile_image-50x50.png"
          ss="https://static-cdn.jtvnw.net/previews-ttv/live_user_revious0-440x248.jpg"
          name="The Real Mahjong"
          followers="2.6m"
        />
        <h5>RECOMMENDED CHANNELS</h5>
        <Channel
          avatar="https://static-cdn.jtvnw.net/jtv_user_pictures/96898ebe-75ef-481d-8954-9447bc4571ad-profile_image-50x50.png"
          ss="https://static-cdn.jtvnw.net/previews-ttv/live_user_lemon0521-440x248.jpg"
          name="Cute Mahjong"
          followers="214k"
        />
        <p className="sidebar__topShowMore">Show More</p>
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__bottomContainer">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search to Add Friends"></input>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
