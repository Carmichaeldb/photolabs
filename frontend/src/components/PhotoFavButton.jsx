import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({
  photo,
  updateFavourites,
  favourites,
  isPhotoFavourite,
}) => {
  return (
    <div
      className="photo-list__fav-icon"
      onClick={() => updateFavourites(photo)}
    >
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isPhotoFavourite(photo, favourites)} />
      </div>
    </div>
  );
};

export default PhotoFavButton;