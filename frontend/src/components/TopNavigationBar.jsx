import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({ topics, favourites, allPhotos, photosByTopic }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={() => allPhotos()}>PhotoLabs</span>
      <TopicList topics={topics} photosByTopic={photosByTopic} />
      <FavBadge favourites={favourites} />
    </div>
  );
};

export default TopNavigation;