import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({photo, selectFav}) => {

  const {id, location: {city, country}, urls: {regular}, user: {username, profile}} = photo;
  return (
    <div className="photo-list__item">
      <PhotoFavButton selectFav={selectFav} photoId={id} />
      <img className="photo-list__image" src={regular} />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} />
        <div className="photo-list__user-info">
          {username}
          <div className="photo-list__user-location">
            {city}, {country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
