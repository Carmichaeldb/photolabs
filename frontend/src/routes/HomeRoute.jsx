import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = ({
  photos,
  topics,
  displayModal,
  favourites,
  updateFavourites,
  isPhotoFavourite,
  allPhotos,
  photosByTopic,
  favouritePhotos
}) => {
  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        favourites={favourites}
        allPhotos={allPhotos}
        photosByTopic={photosByTopic}
        favouritePhotos={favouritePhotos}
      />
      <PhotoList
        photos={photos}
        favourites={favourites}
        updateFavourites={updateFavourites}
        isPhotoFavourite={isPhotoFavourite}
        displayModal={displayModal}
      />
    </div>
  );
};

export default HomeRoute;
