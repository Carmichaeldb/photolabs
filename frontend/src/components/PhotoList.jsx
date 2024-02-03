import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({photos, selectFav}) => {
  return (
    <ul className="photo-list">
      {photos.map((photo, index) => (
        <li key={index}>
          <PhotoListItem photo={photo} selectFav={selectFav} />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
