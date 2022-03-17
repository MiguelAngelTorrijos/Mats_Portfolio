import React from 'react';
import { Link } from 'react-router-dom';
import { Design } from '../Design/Design';

export const SectionDesigner = () => {
  return (
    <>
      <section className='section-designer'>
        <div className='section-designer__grid'>
          <div className='section-designer__grid__details'>
            <h2 className='section-designer__grid__details__title'>
              <span className='a'>M</span>
              <span className='a'>a</span>
              <span className='a'>t</span>
              <span className='a'>s</span>
              <span className='a none'>.</span>
              <span className='a'>d</span>
              <span className='a'>i</span>
              <span className='a'>s</span>
              <span className='a'>e</span>
              <span className='a'>ñ</span>
              <span className='a'>o</span>
              <span className='a'>.</span>
            </h2>
            <p>
              Apasionado del diseño en general. Diseñando desde imagen
              corporativa, logotipos, papelería, interfaz de usuario a diseño de
              ropa o prototipos.{' '}
            </p>
            <p>
              ¡Chequea mi{' '}
              <Link className='link-designer' to='/portfolio'>
                portfolio
              </Link>{' '}
              para ver algunos diseños!
            </p>
          </div>
          <div className='section-designer__grid__icon'>
            <div className='section-designer__grid__icon__settings'>
              <Design />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
