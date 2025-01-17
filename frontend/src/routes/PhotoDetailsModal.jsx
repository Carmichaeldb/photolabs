import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoDetailsModal = ({
  closeModal,
  photo,
  favourites,
  updateFavourites,
  isPhotoFavourite,
}) => {
  const {
    id,
    location: { city, country },
    urls: { full },
    user: { username, profile },
  } = photo;
  const similarPhotosArray = Object.values(photo.similar_photos);
  
  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__images">
        <button
          className="photo-details-modal__close-button"
          onClick={closeModal}
        >
          <img src={closeSymbol} alt="close symbol" />
        </button>
        <PhotoFavButton
          updateFavourites={updateFavourites}
          favourites={favourites}
          photoId={id}
          isPhotoFavourite={isPhotoFavourite}
        />
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
        <PhotoList
          photos={similarPhotosArray}
          favourites={favourites}
          updateFavourites={updateFavourites}
          isPhotoFavourite={isPhotoFavourite}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
