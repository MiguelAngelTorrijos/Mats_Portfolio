import { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
// import { Hamburguer } from './Hamburguer/Hamburguer';
import { LogoHeader } from './LogoHeader/LogoHeader';
import soundClickAudio from '../../../sound/click.mp3';
import audioContext from '../../../contexts/audio-context';

export const Navigation = () => {
  const { setAudio, audio } = useContext(audioContext);

  const btnSwitch = useRef(null);
  const btnAudioOff = useRef(null);
  const btnAudioOn = useRef(null);

  const handleDark = () => {
    btnSwitch.current.classList.toggle('active');
    window.document.body.classList.toggle('dark');
    playClick();
  };

  let playClick = () => {
    let sound = document.getElementById('audio');
    if (audio) sound.play();
  };

  const handleAudio = () => {
    setAudio(!audio);
    playClick();
  };

  return (
    <>
      <div className='navigation'>
        <div className='navigation__grid'>
          <Link to='/' onClick={playClick}>
            <LogoHeader className='navigation__logo' />
          </Link>
          <div className='navigation__links'>
            <Link className='navigation__link' onClick={playClick} to='/'>
              Home
            </Link>
            <audio id='audio' src={soundClickAudio}></audio>
            <Link className='navigation__link' to='/about' onClick={playClick}>
              Sobre mi
            </Link>
            <Link className='navigation__link' to='/skills' onClick={playClick}>
              Skills
            </Link>
            <Link
              className='navigation__link'
              to='/portfolio'
              onClick={playClick}
            >
              Portfolio
            </Link>
            <Link
              className='navigation__link'
              to='/contact'
              onClick={playClick}
            >
              Contacto
            </Link>
          </div>
          <div className='controls'>
            <div className='sound'>
              {audio ? (
                <button
                  onClick={handleAudio}
                  ref={btnAudioOn}
                  className='audioOn'
                  id='audioOn'
                >
                  <span>
                    <i className='fas fa-volume-up'></i>
                  </span>
                </button>
              ) : (
                <button
                  onClick={handleAudio}
                  ref={btnAudioOff}
                  className='audioOff'
                  id='audioOff'
                >
                  <span>
                    <i className='fas fa-volume-mute'></i>
                  </span>
                </button>
              )}
            </div>
            <button
              onClick={handleDark}
              ref={btnSwitch}
              className='switch'
              id='switch'
            >
              <span>
                <i className='fas fa-sun'></i>
              </span>
              <span>
                <i className='fas fa-moon'></i>
              </span>
            </button>
          </div>
        </div>
      </div>
      {/* <Hamburguer /> */}
    </>
  );
};
