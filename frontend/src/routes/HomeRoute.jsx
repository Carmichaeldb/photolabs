import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import { useState } from 'react';

const HomeRoute = ({photos, topics, displayModal, favourites, toggleFav}) => {

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favourites={favourites} />
      <PhotoList photos={photos} favourites={favourites} toggleFav={toggleFav} displayModal={displayModal} />
    </div>
  );
};

export default HomeRoute;
