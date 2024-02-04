import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({
  photos,
  favourites,
  updateFavourites,
  displayModal,
  isPhotoFavourite,
}) => {
  return (
    <ul className="photo-list">
      {photos.map((photo, index) => (
        <li key={index}>
          <PhotoListItem
            photo={photo}
            favourites={favourites}
            updateFavourites={updateFavourites}
            displayModal={displayModal}
            isPhotoFavourite={isPhotoFavourite}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
