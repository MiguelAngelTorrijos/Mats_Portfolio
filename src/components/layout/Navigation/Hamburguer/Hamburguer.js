import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import audioContext from '../../../../contexts/audio-context';
import soundClickAudio from '../../../../sound/click.mp3';

export const Hamburguer = () => {
  const { setAudio, audio } = useContext(audioContext);
  const btnSwitch = useRef(null);
  const btnAudioOff = useRef(null);
  const btnAudioOn = useRef(null);
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

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

  const handleClose = (route) => {
    setChecked(!checked);
    playClick();
    navigate(route);
  };

  let menu = [
    { name: 'Home', route: '/' },
    { name: 'Sobre mi', route: '/about' },
    { name: 'Skills', route: '/skills' },
    { name: 'Portfolio', route: '/portfolio' },
    { name: 'Contacto', route: '/contact' },
  ];

  return (
    <div className='navbar'>
      <div className='container nav-container'>
        <input
          className='checkbox'
          type='checkbox'
          checked={checked}
          onChange={handleClose}
        />
        <div className='hamburger-lines'>
          <span className='line line1'></span>
          <span className='line line2'></span>
          <span className='line line3'></span>
        </div>
        <audio id='audio' src={soundClickAudio}></audio>
        <div className='menu-items'>
          {menu.map((items, indexa) => (
            <li key={indexa}>
              <Link
                className='navigation__link'
                to={items.route}
                onClick={() => {
                  playClick();
                  setChecked(!checked);
                }}
              >
                {items.name}
              </Link>
            </li>
          ))}
          <div className='controls theme'>
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
            <div>
              {/* <span>
                <i className='fas fa-sun'></i>
              </span>
              <span>
                <i className='fas fa-moon'></i>
              </span> */}
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
      </div>
    </div>
  );
};
