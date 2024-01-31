import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const sampleDataForPhotoListItem = {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    username: "Joe Example",
    profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
  };
  const photos = [... Array(3)].map(() => sampleDataForPhotoListItem);
  console.log(photos);
  return (
    <div className="App">
      {photos.map((photo) => (
        <PhotoListItem key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default App;
