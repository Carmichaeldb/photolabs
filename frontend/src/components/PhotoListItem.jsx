import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {

  const {city, country, imageSource, profile, username} = props;
  return (
    <div className="photo-list__item">
      <img src={imageSource} />
      <img src={profile} />
      <p>{username}</p>
      <p>{city}, {country}</p>
    </div>
  );
};

export default PhotoListItem;
