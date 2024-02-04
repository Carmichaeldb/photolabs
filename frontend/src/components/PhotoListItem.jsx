import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({
  photo,
  favourites,
  updateFavourites,
  displayModal,
  isPhotoFavourite,
}) => {
  const {
    id,
    location: { city, country },
    urls: { regular },
    user: { username, profile },
  } = photo;

  return (
    <div className="photo-list__item">
      <PhotoFavButton
        favourites={favourites}
        updateFavourites={updateFavourites}
        photoId={id}
        isPhotoFavourite={isPhotoFavourite}
      />
      <img
        className="photo-list__image"
        src={regular}
        onClick={() => displayModal(id)}
      />
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
