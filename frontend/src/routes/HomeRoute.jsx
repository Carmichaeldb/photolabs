import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import { useState } from 'react';

const HomeRoute = ({photos, topics}) => {
  const [favourites, setFavourites] = useState([]);

  const toggleFav = (id) => {
    setFavourites((favourites) => {
      if (favourites.includes(id)) {
        return favourites.filter((favId) => favId !== id);
      }
      return [...favourites, id];
    });
  };


  return (
    <div className="home-route">
      <TopNavigation topics={topics} favourites={favourites} />
      <PhotoList photos={photos} toggleFav={toggleFav} />
    </div>
  );
};

export default HomeRoute;
