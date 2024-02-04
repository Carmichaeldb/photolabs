import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({
  photoId,
  updateFavourites,
  favourites,
  isPhotoFavourite,
}) => {
  return (
    <div
      className="photo-list__fav-icon"
      onClick={() => updateFavourites(photoId)}
    >
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isPhotoFavourite(photoId, favourites)} />
      </div>
    </div>
  );
};

export default PhotoFavButton;