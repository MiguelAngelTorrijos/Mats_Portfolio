import React, { useContext } from 'react';
import audioContext from '../../../contexts/audio-context';
import LogoMats from '../../../img/logo_mats.svg';
import LogoMatsText from '../../../img/mats_developer_logo_text.svg';
import LogoMatsTextDark from '../../../img/mats_developer_logo_text_dark.svg';
import { ContactHome } from './ContactHome/ContactHome';
import { Description } from './Description/Description';
import { SectionDesigner } from './SectionDesigner/SectionDesigner';
import { SectionDeveloper } from './SectionDeveloper/SectionDeveloper';
import { SectionPhotographer } from './SectionPhotographer/SectionPhotographer';
import { Testimonials } from './Testimonials/Testimonials';
import soundLogo from '../../../sound/old_door.mp3';

export const Home = () => {
  let playLogo = () => {
    let sound = document.getElementById('soundLogo');
    if (audio) sound.play();
  };

  const { audio } = useContext(audioContext);

  return (
    <>
      <audio id='soundLogo' src={soundLogo}></audio>
      <div className='header-before'></div>
      <header className='site-header'>
        <div className='site-header__grid'>
          <div className='site-header__container-logo'>
            <img
              className='site-header__container-logo__logo'
              src={LogoMats}
              alt='logo Mats'
              onMouseOver={playLogo}
            />
          </div>

          <div className='site-header__container-text-logo'>
            <img
              className='site-header__container-text-logo__text-logo'
              src={LogoMatsTextDark}
              alt='logo Mats texto'
            />
          </div>

          <div className='site-header__container-text-logo'>
            <img
              className='site-header__container-text-logo__text-logo'
              src={LogoMatsText}
              alt='logo Mats texto'
            />
          </div>

          <div className='site-header__container-description'>
            <h2 className='site-header__container-description__tagline'>
              Dando vida a tus ideas con código.
            </h2>
            <h3 className='site-header__container-description__title'>
              Web Developer. Diseñador gráfico. Fotógrafo entusiasta.
            </h3>
          </div>
        </div>
      </header>
      <div className='header-after'></div>
      <Testimonials />
      <Description />
      <SectionDeveloper />
      <SectionDesigner />
      <SectionPhotographer />
      <ContactHome />
    </>
  );
};
