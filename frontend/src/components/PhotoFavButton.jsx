import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ photoId, toggleFav, favourites, favButtonState }) => {
  return (
    <div className="photo-list__fav-icon" onClick={() => toggleFav(photoId)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={favButtonState(photoId, favourites)} />
      </div>
    </div>
  );
};

export default PhotoFavButton;