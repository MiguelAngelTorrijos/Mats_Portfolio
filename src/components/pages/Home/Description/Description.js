/* eslint-disable */
import { Link } from 'react-router-dom';
import imgProfile from '../../../../img/profile_Photo_B&N.jpg';
import imgProfile2 from '../../../../img/profile_Photo_color.jpg';
import imgProfileDev from '../../../../img/profile_dev_b&n.jpg';
import imgProfileDev2 from '../../../../img/profile_dev_color.jpg';
import imgProfileArms from '../../../../img/perfil1_b&n.jpg';
import imgProfileArms2 from '../../../../img/perfil_1.jpg';
import imgInstagram from '../../../../img/instragram_logo.svg';
import imgIn from '../../../../img/in_logo.svg';
import { useContext, useEffect, useState } from 'react';
import soundPop from '../../../../sound/pop.mp3';
import audioContext from '../../../../contexts/audio-context';

export const Description = () => {
  const [visibility, setVisibility] = useState(2);

  useEffect(() => {}, [visibility]);

  const handleHover1 = (e) => {
    e.target.src = imgProfileDev2;
  };

  const handleOut1 = (e) => {
    e.target.src = imgProfileDev;
  };
  const handleHover2 = (e) => {
    e.target.src = imgProfile2;
  };

  const handleOut2 = (e) => {
    e.target.src = imgProfile;
  };

  const handleHover3 = (e) => {
    e.target.src = imgProfileArms2;
  };

  const handleOut3 = (e) => {
    e.target.src = imgProfileArms;
  };

  let sound = new Audio(soundPop);
  const { audio } = useContext(audioContext);

  useEffect(() => {}, [visibility]);

  const handleSliderChange = (e) => {
    if (audio) sound.play();
    setVisibility(e.target.value);
  };

  return (
    <>
      <div className='description'>
        <div className='description__just-center'>
          <div className='description__grid'>
            <div id='bottom' className='description__grid__slider'>
              <input
                type='range'
                min='0'
                max='2'
                className='slider'
                id='slider'
                onChange={handleSliderChange}
              />
            </div>
            <div className='description__grid__info'>
              <ul className='description__grid__info__content'>
                {visibility == 2 && (
                  <li className='description__grid__info__content__item'>
                    <h1
                      className='description__grid__info__title'
                      id='h1rubber'
                    >
                      <span className='a size'>M</span>
                      <span className='a size'>a</span>
                      <span className='a'>t</span>
                      <span className='a'>s</span>
                      <span className='a op'>.</span>
                      <span className='a'>e</span>
                      <span className='a'>s</span>
                      <span className='a op'>.</span>
                      <span className='a'>l</span>
                      <span className='a'>o</span>
                      <span className='a op'>.</span>
                      <span className='a'>q</span>
                      <span className='a'>u</span>
                      <span className='a'>e </span>
                      <span className='a op'>.</span>
                      <span className='a'>n</span>
                      <span className='a'>e</span>
                      <span className='a'>c</span>
                      <span className='a'>e</span>
                      <span className='a'>s</span>
                      <span className='a'>i</span>
                      <span className='a'>t</span>
                      <span className='a'>a</span>
                      <span className='a'>s</span>
                      <span className='a'>.</span>
                    </h1>
                    <div>
                      <p>Web developer | Diseñador gráfico.</p>
                      <p>
                        Soy un desarrollador web con ~10 años de experiencia en
                        diseño gráfico. He tenido la suerte de trabajar con
                        empresas como Pfizer, Roche, MSD, Novartis y
                        Astrazeneca.
                      </p>
                      <p>
                        Si necesitas más información{' '}
                        <Link className='link-content' to='/contact'>
                          conecta conmigo
                        </Link>
                        . ¡Trabajemos juntos! y...
                      </p>
                      <p>
                        <strong>¡Hagamos cosas increíbles!</strong>
                      </p>
                    </div>
                    <picture className='description__grid__info__content__image'>
                      <img
                        onMouseOver={handleHover1}
                        onMouseOut={handleOut1}
                        className='description__grid__info__content__image__profile'
                        src={imgProfileDev}
                        alt='Foto de perfil'
                      />
                    </picture>
                  </li>
                )}
                {visibility == 1 && (
                  <li className='description__grid__info__content__item'>
                    <h1 className='description__grid__info__title'>
                      <span className='a'>M</span>
                      <span className='a'>a</span>
                      <span className='a'>t</span>
                      <span className='a'>s</span>
                      <span className='a op'>.</span>
                      <span className='a'>e</span>
                      <span className='a'>s</span>
                      <span className='a op'>.</span>
                      <span className='a'>p</span>
                      <span className='a'>o</span>
                      <span className='a'>l</span>
                      <span className='a'>i</span>
                      <span className='a'>v</span>
                      <span className='a'>a</span>
                      <span className='a'>l</span>
                      <span className='a'>e</span>
                      <span className='a'>n</span>
                      <span className='a'>t</span>
                      <span className='a'>e</span>
                      <span className='a'>.</span>
                    </h1>
                    <div>
                      <p>Haciendo un poco de todo.</p>
                      <p>
                        Diseño desde hace más de 10 años todo tipo de proyectos.
                        Sin embargo, últimamente mi ordenador ha pasado de tener
                        una paleta amplia de colores a una pantalla negra más
                        característica de las películas de Matrix. Programando
                        en <strong>React</strong> enfocándome en la parte front.
                      </p>
                      <p>
                        Visita mi portfolio y{' '}
                        <Link className='link-content' to='/contact'>
                          conecta conmigo
                        </Link>
                        .
                      </p>
                      <p>
                        <strong>¡Démosle vida a tus proyectos!</strong>
                      </p>
                    </div>
                    <picture className='description__grid__info__content__image'>
                      <img
                        onMouseOver={handleHover2}
                        onMouseOut={handleOut2}
                        className='description__grid__info__content__image__profile2'
                        src={imgProfile}
                        alt='Foto de perfil'
                      />
                    </picture>
                  </li>
                )}
                {visibility == 0 && (
                  <li className='description__grid__info__content__item'>
                    <h1 className='description__grid__info__title'>
                      <span className='a'>T</span>
                      <span className='a'>r</span>
                      <span className='a'>a</span>
                      <span className='a'>b</span>
                      <span className='a'>a</span>
                      <span className='a'>j</span>
                      <span className='a'>a</span>
                      <span className='a op'>.</span>
                      <span className='a'>c</span>
                      <span className='a'>o</span>
                      <span className='a'>n</span>
                      <span className='a op'>.</span>
                      <span className='a'>M</span>
                      <span className='a'>a</span>
                      <span className='a'>t</span>
                      <span className='a'>s</span>
                      <span className='a'>.</span>
                    </h1>
                    <div>
                      <p>¡Mats hace cosas increíbles para gente increíble!</p>
                      <p>
                        Estoy abierto a nuevas oportunidades como Front-End
                        Developer trabajando con React, aunque estoy dispuesto a
                        conocer nuevos lenguajes.
                      </p>
                      <p>
                        Si tienes una oportunidad o deseas saber algo más de mí,
                        contacta a través del formulario o directamente en
                        LinkedIn.
                      </p>
                      {/* <h4>Eso es todo.</h4> */}
                      <h4>
                        <Link className='link-content' to='/contact'>
                          Ve a contratarlo.
                        </Link>
                      </h4>
                    </div>
                    <picture className='description__grid__info__content__image'>
                      <img
                        onMouseOver={handleHover3}
                        onMouseOut={handleOut3}
                        className='description__grid__info__content__image__profile3'
                        src={imgProfileArms}
                        alt='Foto de perfil'
                      />
                    </picture>
                  </li>
                )}
              </ul>

              <div className='description__grid__rrss'>
                <Link
                  to='//instagram.com/mats_designer/'
                  className='description__grid__rrss__link'
                  target='_blank'
                >
                  <img
                    className='description__grid__rrss__link__svg'
                    src={imgInstagram}
                    alt='logo Instagram'
                    title='Logo Instagram'
                  />
                </Link>
                <Link
                  to='//linkedin.com/in/miguel-angel-torrijos-sanchez/'
                  className='description__grid__rrss__link'
                  target='_blank'
                >
                  <img
                    className='description__grid__rrss__link__svg'
                    src={imgIn}
                    alt='logo Linkedin'
                    title='Logo Linkedin'
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
/* eslint-enable */
