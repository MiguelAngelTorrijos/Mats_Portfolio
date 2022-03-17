/* eslint-disable */
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import audioContext from '../../../../contexts/audio-context';
import soundPop from '../../../../sound/pop.mp3';

export const Testimonials = () => {
  const [visibility, setVisibility] = useState(3);

  let sound = new Audio(soundPop);
  const { audio } = useContext(audioContext);

  useEffect(() => {}, [visibility]);

  const handleSliderChange = (e) => {
    if (audio) sound.play();
    setVisibility(e.target.value);
  };

  return (
    <>
      <div className='testimonials'>
        <div className='testimonials__grid'>
          <ul className='testimonials__testimonials'>
            <li className='testimonials__testimonials__item'>
              <div id='bottom' className='description__grid__slider'>
                <input
                  type='range'
                  min='0'
                  max='3'
                  className='slider'
                  id='slider'
                  onChange={handleSliderChange}
                />
              </div>
              <div className='testimonial'>
                <blockquote className='testimonial__body'>
                  {visibility == 3 && (
                    <div className='testimonial__body__quote'>
                      <p className='testimonial__body__quote__p'>
                        Con más de 10 años de experiencia diseñando para todo
                        tipo de clientes y proyectos.
                      </p>
                    </div>
                  )}
                  {visibility == 2 && (
                    <div className='testimonial__body__quote'>
                      <p className='testimonial__body__quote__p'>
                        Programador orientado al front con ojo crítico para el
                        diseño.
                      </p>
                    </div>
                  )}
                  {visibility == 1 && (
                    <div className='testimonial__body__quote'>
                      <p className='testimonial__body__quote__p'>
                        Visita mi{' '}
                        <Link className='link-contact' to='/portfolio'>
                          portfolio
                        </Link>{' '}
                        para ver alguno de mis trabajos.
                      </p>
                    </div>
                  )}
                  {visibility == 0 && (
                    <div className='testimonial__body__quote'>
                      <p className='testimonial__body__quote__p'>
                        ¡Si tienes alguna duda o quieres saber más sobre mí,{' '}
                        <Link className='link-contact' to='/contact'>
                          contactame
                        </Link>{' '}
                        !
                      </p>
                    </div>
                  )}
                </blockquote>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
/* eslint-enable */
