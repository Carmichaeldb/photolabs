import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ photos, toggleFav, displayModal }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo, index) => (
        <li key={index}>
          <PhotoListItem photo={photo} toggleFav={toggleFav} displayModal={displayModal}  />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
