import {React, useState} from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import topics from "./mocks/topics";
import photos from "./mocks/photos";


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [favourites, setFavourites] = useState([]);
  const toggleFav = (id) => {
    setFavourites((favourites) => {
      if (favourites.includes(id)) {
        return favourites.filter((favId) => favId !== id);
      }
      return [...favourites, id];
    });
  };

  const [showModal, setShowModal] = useState({show: false, photoId: null});
  const displayModal = (photoId) => {
    const modalPhoto = photos.find((photo) => photo.id === photoId);
    setShowModal({show: true, modalPhoto});
  };
  const closeModal = () => setShowModal({show: false, photoId: null});

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} displayModal={displayModal} favourites={favourites} toggleFav={toggleFav} />
      {showModal.show && <PhotoDetailsModal closeModal={closeModal} photo={showModal.modalPhoto} toggleFav={toggleFav} favourites={favourites} />}
    </div>
  );
};

export default App;
