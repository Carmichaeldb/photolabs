import {React, useState} from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import topics from "./mocks/topics";
import photos from "./mocks/photos";


// Note: Rendering a single component to build components in isolation
const App = () => {
  const [showModal, setShowModal] = useState(false);
  const displayModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} displayModal={displayModal} />
      {showModal && <PhotoDetailsModal closeModal={closeModal}/>}
    </div>
  );
};

export default App;
