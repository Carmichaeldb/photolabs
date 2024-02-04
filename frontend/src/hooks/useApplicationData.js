import {useState} from 'react';

const useApplicationData = (photos) => {
  //favourites state
  const [favourites, setFavourites] = useState([]);
  const toggleFav = (id) => {
    setFavourites((favourites) => {
      if (favourites.includes(id)) {
        return favourites.filter((favId) => favId !== id);
      }
      return [...favourites, id];
    });
  };

  //modal state
  const [showModal, setShowModal] = useState({ show: false, photoId: null });
  const displayModal = (photoId) => {
    const modalPhoto = photos.find((photo) => photo.id === photoId);
    setShowModal({ show: true, modalPhoto });
  };
  const closeModal = () => setShowModal({ show: false, photoId: null });

  //favourite button state;
  const favButtonState = (photoId, favourites) => favourites.includes(photoId);

  return {
    favourites,
    toggleFav,
    showModal,
    displayModal,
    closeModal,
    favButtonState
  };

};

export default useApplicationData;