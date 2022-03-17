import React from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../../../img/logo_mats_animation1.svg';
import logo1White from '../../../../img/logo_mats_animation1_white.svg';
import logo2 from '../../../../img/logo_mats_animation2.svg';

export const SectionDeveloper = () => {
  return (
    <>
      <section className='section-developer'>
        <div className='section-developer__grid'>
          <div className='section-developer__grid__details'>
            <h2 className='section-developer__grid__details__title'>
              <span className='a'>M</span>
              <span className='a'>a</span>
              <span className='a'>t</span>
              <span className='a'>s</span>
              <span className='a none'>.</span>
              <span className='a'>d</span>
              <span className='a'>e</span>
              <span className='a'>v</span>
              <span className='a'>e</span>
              <span className='a'>l</span>
              <span className='a'>o</span>
              <span className='a'>p</span>
              <span className='a'>e</span>
              <span className='a'>r</span>
              <span className='a'>.</span>
            </h2>
            <p>
              Actualmente, me encuentro desarrollando un nuevo proyecto
              profesional como Front-End developer concretamente trabajando con
              React. Me gusta la animación web y los estilos minimalistas. Menos
              siempre es más.{' '}
            </p>
            <p>
              ¡Chequea mi{' '}
              <Link className='link-developer' to='/portfolio'>
                portfolio
              </Link>{' '}
              para más información!
            </p>
          </div>
          <div className='section-developer__grid__icon'>
            <div className='section-developer__grid__icon__settings'>
              <div className='logo-animated'>
                <img className='logo1-developer' src={logo1} alt='logo Mats' />
                <img
                  className='logo1White-developer'
                  src={logo1White}
                  alt='logo Mats'
                />
                <img className='logo2-developer' src={logo2} alt='logo Mats' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
