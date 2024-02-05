import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, photosByTopic }) => {
  const { id, title } = topic;
  return (
    <div className="topic-list__item">
      <span onClick={() => photosByTopic(id)}>{title}</span>
    </div>
  );
};

export default TopicListItem;
