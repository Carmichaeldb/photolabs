import React, { useEffect, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ photoId, toggleFav, favourites }) => {
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    console.log(selected);
    console.log(favourites);
    if (favourites.includes(photoId)) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  });

  return (
    <div className="photo-list__fav-icon" onClick={() => toggleFav(photoId)}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} />
      </div>
    </div>
  );
};

export default PhotoFavButton;