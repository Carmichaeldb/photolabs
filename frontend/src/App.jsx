import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
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
        photos={state.photoData}
        topics={state.topicData}
        displayModal={displayModal}
        favourites={state.favourites}
        updateFavourites={updateFavourites}
        isPhotoFavourite={isPhotoFavourite}
      />
      {state.showModal && (
        <PhotoDetailsModal
          closeModal={closeModal}
          photo={state.photoData.find((photo) => photo.id === state.photoId)}
          updateFavourites={updateFavourites}
          favourites={state.favourites}
          isPhotoFavourite={isPhotoFavourite}
        />
      )}
    </div>
  );
};

export default App;
