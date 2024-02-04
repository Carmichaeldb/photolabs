import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({
  photos,
  favourites,
  toggleFav,
  displayModal,
  favButtonState
}) => {
  return (
    <ul className="photo-list">
      {photos.map((photo, index) => (
        <li key={index}>
          <PhotoListItem
            photo={photo}
            favourites={favourites}
            toggleFav={toggleFav}
            displayModal={displayModal}
            favButtonState={favButtonState}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
