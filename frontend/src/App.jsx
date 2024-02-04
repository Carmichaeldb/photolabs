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
    toggleFav,
    showModal,
    displayModal,
    closeModal,
    favButtonState
  } = useApplicationData(photos);
  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        displayModal={displayModal}
        favourites={favourites}
        toggleFav={toggleFav}
        favButtonState={favButtonState}
      />
      {showModal.show && (
        <PhotoDetailsModal
          closeModal={closeModal}
          photo={showModal.modalPhoto}
          toggleFav={toggleFav}
          favourites={favourites}
          favButtonState={favButtonState}
        />
      )}
    </div>
  );
};

export default App;
