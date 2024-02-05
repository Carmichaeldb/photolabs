import { useReducer, useEffect } from "react";

const initialState = {
  photoData: [],
  topicData: [],
  favourites: [],
  showModal: false,
  photoId: null
};

const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SHOW_MODAL: "SHOW_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
};

const reducer = (state, action) => {
  switch (action.type) {
  case ACTIONS.FAV_PHOTO_ADDED:
    return { ...state, favourites: [...state.favourites, action.data] };
  case ACTIONS.FAV_PHOTO_REMOVED:
    return {
      ...state,
      favourites: state.favourites.filter((favId) => favId !== action.data),
    };
  case ACTIONS.SET_PHOTO_DATA:
    return { ...state, photoData: action.data};
  case ACTIONS.SET_TOPIC_DATA:
    return { ...state, topicData: action.data};
  case ACTIONS.SHOW_MODAL:
    return { ...state, showModal: true, photoId: action.data };
  case ACTIONS.CLOSE_MODAL:
    return { ...state, showModal: false, photoId: null };
  default:
    throw new Error(
      `Tried to reduce with unsupported action type: ${action.type}`
    );
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("/api/photos")
      .then(res => res.json())
      .then(data => dispatch({type: ACTIONS.SET_PHOTO_DATA, data: data}))
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, data: data }))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  //favourites
  const updateFavourites = (id) => {
    if (state.favourites.includes(id)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, data: id });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, data: id });
    }
  };

  //modal state
  const displayModal = (photoId) => dispatch({ type: ACTIONS.SHOW_MODAL, data: photoId });
  const closeModal = () => dispatch({ type: ACTIONS.CLOSE_MODAL });

  //favourite button state;
  const isPhotoFavourite = (photoId) => state.favourites.includes(photoId);

  return {
    updateFavourites,
    displayModal,
    closeModal,
    isPhotoFavourite,
    state,
  };
};

export default useApplicationData;
