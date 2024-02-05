import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({ topics, favourites, photosByTopic }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} photosByTopic={photosByTopic} />

      <FavBadge favourites={favourites} />
    </div>
  );
};

export default TopNavigation;