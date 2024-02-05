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
  photosByTopic
}) => {
  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        favourites={favourites}
        photosByTopic={photosByTopic}
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
