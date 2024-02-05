import React from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';

const App = () => {
  const {
    updateFavourites,
    displayModal,
    closeModal,
    isPhotoFavourite,
    allPhotos,
    photosByTopic,
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
        allPhotos={allPhotos}
        photosByTopic={photosByTopic}
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
