import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {

  const {location: {city, country}, imageSource, profile, username} = props.photo;
  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={imageSource} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} />
        <div className="photo-list__user-info">
          <span>{username}</span>
          <div className="photo-list__user-location">
            <span>{city}, {country}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
