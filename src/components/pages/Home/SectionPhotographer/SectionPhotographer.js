import React from 'react';
import { Link } from 'react-router-dom';
// import photographyIcon from '../../../../img/photography-icon.svg'
import { Camera } from '../Camera/Camera';

export const SectionPhotographer = () => {
  return (
    <>
      <section className='section-photographer'>
        <div className='section-photographer__grid'>
          <div className='section-photographer__grid__details'>
            <h2 className='section-photographer__grid__details__title'>
              <span className='a'>M</span>
              <span className='a'>a</span>
              <span className='a'>t</span>
              <span className='a'>s</span>
              <span className='a none'>.</span>
              <span className='a'>f</span>
              <span className='a'>o</span>
              <span className='a'>t</span>
              <span className='a'>o</span>
              <span className='a'>g</span>
              <span className='a'>r</span>
              <span className='a'>a</span>
              <span className='a'>f</span>
              <span className='a'>í</span>
              <span className='a'>a</span>
              <span className='a'>.</span>
            </h2>
            <p>
              Fotógrafo en mis ratos libres, me gusta la fotografía de paisaje,
              moda, vehículos, deportiva entre otras. Pero sobre todo me gusta
              dar mi toque personal en la edición.{' '}
            </p>
            <p>
              ¡Chequea mi{' '}
              <Link className='link-photographer' to='/portfolio'>
                portfolio
              </Link>{' '}
              para ver algunas fotos!
            </p>
          </div>
          <div className='section-photographer__grid__icon'>
            <div className='section-photographer__grid__icon__settings'>
              <Camera />
            </div>
          </div>
        </div>
      </section>
      <span className='section-before'></span>
    </>
  );
};
