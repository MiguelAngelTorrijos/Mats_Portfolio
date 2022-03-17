import { createContext } from 'react';

const audioContext = createContext({
  audio: false,
  setAudio: (audio) => {},
});

export default audioContext;
