import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = ({
  photos,
  topics,
  displayModal,
  favourites,
  toggleFav,
  favButtonState
}) => {
  return (
    <div className="home-route">
      <TopNavigation topics={topics} favourites={favourites} />
      <PhotoList
        photos={photos}
        favourites={favourites}
        toggleFav={toggleFav}
        favButtonState={favButtonState}
        displayModal={displayModal}
      />
    </div>
  );
};

export default HomeRoute;
