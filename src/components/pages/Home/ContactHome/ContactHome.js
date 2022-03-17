import React, { useContext, useState } from 'react';
import { ImputField } from '../../Contact/ImputField';
import { TextareaField } from '../../Contact/TextareaField';
import emailjs from '@emailjs/browser';
import soundSendAudio from '../../../../sound/send.mp3';
import audioContext from '../../../../contexts/audio-context';
import { Rocket } from '../Rocket/Rocket';

export const ContactHome = () => {
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    playSend();
    emailjs
      .send(
        'service_txx0y8q',
        'template_aw9fm8r',
        values,
        'user_u3F9FAY2BpYFjBIuwFrfx'
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response);
          setValues({
            fullName: '',
            email: '',
            message: '',
          });
          setStatus('SUCCESS');
        },
        (err) => {
          console.log(err);
        }
      );
    e.target.reset();
  };

  const renderAlert = () => (
    <div className='page-contact__form__alert'>
      <p>Tu mensaje se ha enviado 🚀</p>
    </div>
  );

  let playSend = () => {
    let sound = document.getElementById('send2');
    if (audio) sound.play();
  };

  const { audio } = useContext(audioContext);

  return (
    <>
      <article className='home-contact'>
        <div className='home-contact__grid'>
          <h1 className='home-contact__grid__title'>
            <span className='a'>C</span>
            <span className='a'>o</span>
            <span className='a'>n</span>
            <span className='a'>t</span>
            <span className='a'>á</span>
            <span className='a'>c</span>
            <span className='a'>t</span>
            <span className='a'>a</span>
            <span className='a'>m</span>
            <span className='a'>e</span>
            <span className='a'>!</span>
          </h1>

          <form
            className='home-contact__grid__form after'
            onSubmit={handleSubmit}
          >
            <ImputField
              label='Nombre *'
              name='fullName'
              type='text'
              placeholder='Tu nombre...'
              handleChange={handleChange}
            />
            <ImputField
              label='Correo *'
              name='email'
              type='email'
              placeholder='Tu email...'
              handleChange={handleChange}
            />
            <TextareaField
              handleChange={handleChange}
              label='Mensaje *'
              name='message'
            />

            {status && renderAlert()}
            <audio id='send2' src={soundSendAudio}></audio>
            <button className='home-contact__grid__form__submit' type='submit'>
              Enviar
            </button>
          </form>
          <div className='rocket__grid'>
            <Rocket />
          </div>
        </div>
      </article>
    </>
  );
};
