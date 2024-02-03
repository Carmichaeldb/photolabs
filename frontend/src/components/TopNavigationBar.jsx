import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({topics, favourites}) => {
  console.log(favourites);
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />

      <FavBadge favourites={favourites} />
    </div>
  );
};

export default TopNavigation;