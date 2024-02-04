import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({closeModal, photo, favourites, toggleFav}) => {
  const {
    id,
    location: { city, country },
    urls: { full },
    user: { username, profile },
  } = photo;
  const similarPhotosArray = Object.values(photo.similarPhotos);

  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__images">
        <button
          className="photo-details-modal__close-button"
          onClick={closeModal}
        >
          <img src={closeSymbol} alt="close symbol" />
        </button>
        <PhotoFavButton toggleFav={toggleFav} favourites={favourites} photoId={id} />
        <img className="photo-details-modal__image" src={full} />
        <div className="photo-details-modal__photographer-details">
          <img
            className="photo-details-modal__photographer-profile"
            src={profile}
          />
          <div className="photo-details-modal__photographer-info">
            {username}
            <div className="photo-details-modal__photographer-location">
              {city}, {country}
            </div>
          </div>
        </div>
        <div className="photo-details-modal__header">Similar Photos</div>
        <PhotoList photos={similarPhotosArray} favourites={favourites} toggleFav={toggleFav} />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
