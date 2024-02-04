import {useState} from 'react';

const useApplicationData = () => {
  //favourites state
  const [favourites, setFavourites] = useState([]);
  const updateFavourites = (id) => {
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
    setShowModal({ show: true, photoId });
  };
  const closeModal = () => setShowModal({ show: false, photoId: null });

  //favourite button state;
  const isPhotoFavourite = (photoId, favourites) => favourites.includes(photoId);

  return {
    favourites,
    updateFavourites,
    showModal,
    displayModal,
    closeModal,
    isPhotoFavourite,
  };

};

export default useApplicationData;