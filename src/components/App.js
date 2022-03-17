import { useState } from 'react';
import audioContext from '../contexts/audio-context';

import './../scss/App.scss';
import { Footer } from './layout/Footer/Footer';
import { Navigation } from './layout/Navigation/Navigation';
import { Hamburguer } from './layout/Navigation/Hamburguer/Hamburguer';
import PublicRoutes from './routes';

function App() {
  const [audio, setAudio] = useState(false);

  return (
    <>
      <audioContext.Provider value={{ audio, setAudio }}>
        <Navigation />

        <Hamburguer />

        <PublicRoutes />

        <Footer />
      </audioContext.Provider>
    </>
  );
}

export default App;
