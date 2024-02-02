import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";
import photos from "mocks/photos";

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {photos.map((photo, index) => (
        <li key={index}>
          <PhotoListItem photo={photo} />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
