import { useReducer, useEffect } from "react";
import axios from "axios";

const initialState = {
  photoData: [],
  topicData: [],
  favourites: [],
  showModal: false,
  photoId: null,
};

const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SHOW_MODAL: "SHOW_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS",
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
    return { ...state, photoData: action.data };
  case ACTIONS.SET_TOPIC_DATA:
    return { ...state, topicData: action.data };
  case ACTIONS.SHOW_MODAL:
    return { ...state, showModal: true, photoId: action.data };
  case ACTIONS.CLOSE_MODAL:
    return { ...state, showModal: false, photoId: null };
  case ACTIONS.GET_PHOTOS_BY_TOPICS:
    return { ...state, photoData: action.data };
  default:
    throw new Error(
      `Tried to reduce with unsupported action type: ${action.type}`
    );
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // API GET REQUESTS
  const allPhotos = () => {
    axios
      .get("/api/photos")
      .then((res) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, data: res.data }))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const photosByTopic = (topicId) => {
    axios
      .get(`/api/topics/photos/${topicId}`)
      .then((res) =>
        dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, data: res.data })
      )
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    allPhotos();
  }, []);

  useEffect(() => {
    axios
      .get("/api/topics")
      .then((res) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, data: res.data }))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  //favourites management
  const updateFavourites = (id) => {
    if (state.favourites.includes(id)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, data: id });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, data: id });
    }
  };

  //favourite button state;
  const isPhotoFavourite = (photoId) => state.favourites.includes(photoId);

  //modal state
  const displayModal = (photoId) =>
    dispatch({ type: ACTIONS.SHOW_MODAL, data: photoId });
  const closeModal = () => dispatch({ type: ACTIONS.CLOSE_MODAL });

  return {
    updateFavourites,
    displayModal,
    closeModal,
    isPhotoFavourite,
    allPhotos,
    photosByTopic,
    state,
  };
};

export default useApplicationData;
