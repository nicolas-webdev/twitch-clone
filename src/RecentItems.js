import React from "react";
import "./RecentItems.css";

const RecentItems = ({ url, title }) => {
  return (
    <div className="item">
      <iframe
        title={title}
        src={`https://www.youtube.com/embed/${url}`}
        frameborder="0"
        width="400"
        height="235"
        allowFullScreen={true}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>

      <div className="item__details">
        <img
          src={`https://i.ytimg.com/vi/${url}/maxresdefault.jpg`}
          alt={title}
        />
        <div className="item__detailsText">
          <h4>{title}</h4>
          <p>Mahjong Channel</p>
          <p>Mahjong and Board Games</p>
        </div>
      </div>
    </div>
  );
};

export default RecentItems;
