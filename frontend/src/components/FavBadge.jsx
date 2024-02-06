import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ favourites, favouritePhotos }) => {
  return (
    <div className="fav-badge" onClick={() => favouritePhotos(favourites)}>
      <FavIcon displayAlert={favourites.length !== 0} selected={true} />
    </div>
  );
};

export default FavBadge;