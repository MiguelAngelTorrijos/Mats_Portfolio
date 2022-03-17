import { Link } from 'react-router-dom';
import '../../../scss/ui/logo-header/_logo-header.scss';
import inLogo from '../../../img/in_logo.svg';
import instagramLogo from '../../../img/instragram_logo.svg';


export const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className='footer__socials'>
          <Link
            className='footer__socials__box'
            to='//linkedin.com/in/miguel-angel-torrijos-sanchez/'
            target='_blank'
          >
            <img
              className='footer__socials__box__icon'
              src={inLogo}
              alt='logo Linkedin'
              title='Logo Linkedin'
            />
          </Link>
          <Link
            className='footer__socials__box'
            to='//instagram.com/mats_designer/'
            target='_blank'
          >
            <img
              className='footer__socials__box__icon'
              src={instagramLogo}
              alt='logo Instagram'
              title='Logo Instagram'
            />
          </Link>
          <div>
          </div>
        </div>
        <div className='footer__info'>
          <span className='footer__info__line'> | </span>
          <span className='footer__info__text'>Mats © 2022</span>
        </div>
      </footer>
    </>
  );
};
