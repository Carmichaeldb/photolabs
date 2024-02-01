import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = () => {
  const [selected, setSelected] = useState(false);

  const favClicked = () => {
    setSelected(prevSelected => !prevSelected);
  };

  return (
    <div className="photo-list__fav-icon" onClick={favClicked}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} />
      </div>
    </div>
  );
};

export default PhotoFavButton;