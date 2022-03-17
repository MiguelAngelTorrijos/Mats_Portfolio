import React, { useContext } from 'react';
import ninjaBody from '../../../img/ninja_cuerpo.svg';
import ninjaHead from '../../../img/ninja_cabeza.svg';
import ninjaEyebrows from '../../../img/ninja_cejas.svg';
import ninjaTapeFront from '../../../img/ninja_cinta_delantera.svg';
import ninjaTapeBack from '../../../img/ninja_cinta_trasera.svg';
import soundNinja from '../../../sound/ninja.mp3';
import audioContext from '../../../contexts/audio-context';

export const Ninja = () => {
  let playNinja = () => {
    let sound = document.getElementById('ninjaSound');
    if (audio) sound.play();
  };
  const { audio } = useContext(audioContext);
  return (
    <div className='ninja'>
      <audio id='ninjaSound' src={soundNinja}></audio>
      <div className='ninja__head'>
        <img
          className='ninja__head__eyebrows'
          src={ninjaEyebrows}
          alt='ninja logo'
          onClick={playNinja}
        />
        <img
          className='ninja__head__tape-front'
          src={ninjaTapeFront}
          alt='ninja logo'
        />
        <img
          className='ninja__head__tape-back'
          src={ninjaTapeBack}
          alt='ninja logo'
        />
        <img
          className='ninja__head__head-background'
          src={ninjaHead}
          alt='ninja logo'
        />
      </div>
      <div className='ninja__body'>
        <img
          className='ninja__body__background'
          src={ninjaBody}
          alt='ninja logo'
        />
      </div>
    </div>
  );
};
