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
    updateFavourites,
    displayModal,
    closeModal,
    isPhotoFavourite,
    state
  } = useApplicationData();
  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        displayModal={displayModal}
        favourites={state.favourites}
        updateFavourites={updateFavourites}
        isPhotoFavourite={isPhotoFavourite}
      />
      {state.showModal && (
        <PhotoDetailsModal
          closeModal={closeModal}
          photo={photos.find((photo) => photo.id === state.photoId)}
          updateFavourites={updateFavourites}
          favourites={state.favourites}
          isPhotoFavourite={isPhotoFavourite}
        />
      )}
    </div>
  );
};

export default App;
