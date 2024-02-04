import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import topics from "./mocks/topics";
import photos from "./mocks/photos";
import useApplicationData from './hooks/useApplicationData';


// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    favourites,
    updateFavourites,
    showModal,
    displayModal,
    closeModal,
    isPhotoFavourite,
  } = useApplicationData();
  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        displayModal={displayModal}
        favourites={favourites}
        updateFavourites={updateFavourites}
        isPhotoFavourite={isPhotoFavourite}
      />
      {showModal.show && (
        <PhotoDetailsModal
          closeModal={closeModal}
          photo={photos.find((photo) => photo.id === showModal.photoId)}
          updateFavourites={updateFavourites}
          favourites={favourites}
          isPhotoFavourite={isPhotoFavourite}
        />
      )}
    </div>
  );
};

export default App;
