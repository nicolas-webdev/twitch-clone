import React from "react";
import "./Profile.css";
import RecentItems from "./RecentItems";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__top">
        <div className="profile__topLeft">
          <img
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/xqcow-profile_image-9298dca608632101-70x70.jpeg"
            alt="Profile"
          />
          <div className="profile__topLeftDetails">
            <h1>Mahjong Programmer</h1>
            <h1>420k followers</h1>
          </div>
        </div>
        <div className="profile__topRight">
          <i className="fas fa-heart graybg"></i>
          <i className="fas fa-bell graybg"></i>
          <i className="fas fa-ellipsis-v"></i>
        </div>
      </div>
      <div className="profile__menu">
        <h2 className="active">Home</h2>
        <h2>About</h2>
        <h2>Schedule</h2>
        <h2>Videos</h2>
        <h2>
          <i className="fas fa-arrow-up"></i>
        </h2>
        <h2>Chat</h2>
      </div>

      <div className="profile__recent">
        <h2>Recent Broadcasts</h2>
        <div className="profile__recentItems">
          <RecentItems
            url={"ZmDNvqS9QPk"}
            title={"🔴 How Mahjong Tables Work"}
          />
          <RecentItems
            url={"A_KLhpxts8c"}
            title={"🔴 2015 World Series of Mahjong"}
          />
          <RecentItems url={"qpYF-xmNMew"} title={"🔴 Learn to Play Mahjong"} />
          <RecentItems
            url={"EBbFTlLzhjA"}
            title={"🔴 Singapore Mahjong Stream"}
          />
        </div>

        <div className="profile__categories">
          <h2>Recently streamed Categories</h2>
          <img
            src="https://static-cdn.jtvnw.net/ttv-boxart/Mahjong%20Soul-144x192.jpg"
            alt="Mahjong Soul"
          />
          <h3>Mahjong Soul</h3>
        </div>
      </div>
    </div>
  );
};

export default Profile;
