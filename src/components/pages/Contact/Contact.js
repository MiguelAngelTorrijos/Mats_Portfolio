import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo1 from '../../../img/logo_mats_animation1.svg';
import logo1White from '../../../img/logo_mats_animation1_white.svg';
import logo2 from '../../../img/logo_mats_animation2.svg';
import ButtonMailto from '../ButtonMailto/ButtonMailto';
import { ImputField } from './ImputField';
import { TextareaField } from './TextareaField';
import emailjs from '@emailjs/browser';
import soundSendAudio from '../../../sound/send.mp3';
import audioContext from '../../../contexts/audio-context';

export const Contact = () => {
  
  const [values, setValues] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    console.log(e);

    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const { audio } = useContext(audioContext);

  let playSend = () => {
    let sound = document.getElementById('send');
    if (audio) sound.play();
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

  const title = 'contáctame!';
  const titleCharacters = title.split('');

  return (
    <div className='just-center-contact'>
      <article className='page-contact '>
        <h1 className='page-contact__title'>
          {titleCharacters.map((characters, index) => (
            <span key={index} className='a'>
              {characters}
            </span>
          ))}
        </h1>
        <div className='page-contact__intro'>
          <div className='page-contact__intro__info'>
            <p>
              ¿Quieres decir "¡Hola!"? ¿Tienes algo que te gustaría preguntar?
              ¿Nuevo proyecto u oportunidad? ¿Quieres contratarme? ¡Contáctame!
            </p>
            <p>
              Utiliza el siguiente formulario. Para una respuesta más rápida,
              envíame un mensaje a{' '}
              <strong>
                <Link
                  className='link-contact'
                  to='//linkedin.com/in/miguel-angel-torrijos-sanchez/'
                  target='_blank'
                >
                  LinkedIn
                </Link>
              </strong>
              .
            </p>
            <p>
              O bien, envíame un correo electrónico a{' '}
              <strong>
                <ButtonMailto
                  label='mats1346@gmail.com'
                  mailto='mailto:mats1346@gmail.com'
                />
                {/* <Link className='link-contact' to='mailto:mats1346@gmail.com'>
                  mats1346@gmail.com
                </Link> */}
              </strong>
              .
            </p>
          </div>
        </div>
        <div className='page-contact__intro__img'>
          <div className='page-contact__intro__img__setting'>
            <div className='logo-animated'>
              <img className='logo1-contact' src={logo1} alt='logo Mats' />
              <img
                className='logo1White-contact'
                src={logo1White}
                alt='logo Mats'
              />
              <img className='logo2-contact' src={logo2} alt='logo Mats' />
            </div>
          </div>
        </div>

        <form className='page-contact__form' onSubmit={handleSubmit}>
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
          <audio id='send' src={soundSendAudio}></audio>
          <button className='page-contact__form__submit' type='submit'>
            Enviar
          </button>
        </form>
      </article>
    </div>
  );
};
