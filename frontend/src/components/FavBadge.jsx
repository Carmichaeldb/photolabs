import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ favourites }) => {
  return (
    <div className="fav-badge">
      <FavIcon
        displayAlert={favourites.length !== 0}
        selected={true}
      />
    </div>
  );
};

export default FavBadge;