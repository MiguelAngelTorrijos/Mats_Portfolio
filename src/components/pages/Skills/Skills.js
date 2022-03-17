import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Ninja } from '../Ninja/Ninja';
import soundBoing from '../../../sound/boing.mp3';
import audioContext from '../../../contexts/audio-context';

export const Skills = () => {
  let playBoing = () => {
    let sound = document.getElementById('boing');
    if (audio) sound.play();
  };
  const { audio } = useContext(audioContext);

  const skillsItems = [
    'React',
    'JavaScript',
    'Html',
    'CSS',
    'SASS',
    'Gulp',
    'BEM',
    'Bootstrap',
    'Bulma',
    'Redux',
    'MongoDB',
    'Express',
    'Photoshop',
    'Illustrator',
    'inDesign',
    'Lightroom',
    'Figma',
    'Node Js',
    'Axios',
  ];

  // const title = 'mis %20 skills';
  // const titleCharacters = title.split('');

  return (
    <div className='just-center-skills'>
      <article className='page-skills'>
        <h1 className='page-skills__title'>
          {/* {titleCharacters.map((characters, index) => (
            <span key={index} className='a'>
              {characters}
            </span>
          ))} */}

          <span className='a'>m</span>
          <span className='a'>i</span>
          <span className='a'>s</span>
          <span className='a none'>.</span>
          <span className='a'>s</span>
          <span className='a'>k</span>
          <span className='a'>i</span>
          <span className='a'>l</span>
          <span className='a'>l</span>
          <span className='a'>s</span>
        </h1>
        <p>
          Soy un desarrollador web con un background en graphic design,
          especializado en branding, imagen corporativa y UI, habiendo trabajado
          desde cero en múltiples proyectos, tanto nacionales como
          internacionales. Gran capacidad de trabajo en equipo y comunicación.
        </p>
        <p>
          Estas son varias de las tecnologías con las que trabajo, además
          encontraras algunos datos profesionales y académicos.
        </p>
        <div className='page-skills__img'>
          <Ninja />
        </div>

        <ul className='page-skills__skills'>
          {skillsItems.map((items) => (
            <li
              className='page-skills__skills__skill'
              onClick={playBoing}
              key={items}
            >
              <span>
                <p>{items}</p>
              </span>
            </li>
          ))}
        </ul>
        <audio id='boing' src={soundBoing}></audio>
      </article>
      <section className='profesional-experience'>
        <h3 className='profesional-experience__title'>
          <span className='a'>T</span>
          <span className='a'>r</span>
          <span className='a'>a</span>
          <span className='a'>y</span>
          <span className='a'>e</span>
          <span className='a'>c</span>
          <span className='a'>t</span>
          <span className='a'>o</span>
          <span className='a'>r</span>
          <span className='a'>i</span>
          <span className='a'>a</span>
          <span className='a none'>.</span>
          <span className='a'>p</span>
          <span className='a'>r</span>
          <span className='a'>o</span>
          <span className='a'>f</span>
          <span className='a'>e</span>
          <span className='a'>s</span>
          <span className='a'>i</span>
          <span className='a'>o</span>
          <span className='a'>n</span>
          <span className='a'>a</span>
          <span className='a'>l</span>
        </h3>
        <div className='profesional-experience__grid'>
          <p>2016 - 2021</p>
          <p>Waanmedia Solutions</p>
          <p>Madrid</p>
          <p>
            <strong>PRODUCT MANAGER</strong>
            <br />
            Comunicación con cliente, coordinación de equipos de desarrollo en
            todas sus fases. Desarrollo de aplicaciones móviles y soluciones
            multimedia orientadas a eventos y congresos.
          </p>
        </div>
        <hr />
        <div className='profesional-experience__grid'>
          <p>2014 - 2016</p>
          <p>Nissan</p>
          <p>Madrid</p>
          <p>
            <strong>CONSULTOR COMERCIAL</strong>
            <br />
            Comercial de vehículos nuevos y seminuevos. Trato continuo con
            clientes, financieras y empresas de renting.
          </p>
        </div>
        <hr />
        <div className='profesional-experience__grid'>
          <p>2009 - 2013</p>
          <p>Surfernet</p>
          <p>Madrid</p>
          <p>
            <strong>DISEÑADOR GRÁFICO / MULTIMEDIA</strong>
            <br />
            Proyectos orientados a la industria farmacéutica, diseño de
            interfaces de juegos interactivos, herramientas médicas, cursos de
            formación online. Envuelto en proyectos con Pfizer, AstraZeneca,
            Roche, GSK, MSD, entre otros.
          </p>
        </div>
        <hr />
        <div className='profesional-experience__grid'>
          <p>2008 - 2009</p>
          <p>Visual Factory</p>
          <p>Madrid</p>
          <p>
            <strong>DISEÑADOR GRÁFICO</strong>
            <br />
            Diseño gráfico de publicidad para tiendas Juteco. Cartelería,
            animaciones de video realizadas en Flash.
          </p>
        </div>
      </section>
      <section className='academic-education'>
        <h3 className='academic-education__title'>
          <span className='a'>F</span>
          <span className='a'>o</span>
          <span className='a'>r</span>
          <span className='a'>m</span>
          <span className='a'>a</span>
          <span className='a'>c</span>
          <span className='a'>i</span>
          <span className='a'>ó</span>
          <span className='a'>n</span>
          <span className='a none'>.</span>
          <span className='a'>a</span>
          <span className='a'>c</span>
          <span className='a'>a</span>
          <span className='a'>d</span>
          <span className='a'>é</span>
          <span className='a'>m</span>
          <span className='a'>i</span>
          <span className='a'>c</span>
          <span className='a'>a</span>
        </h3>
        <div className='academic-education__grid'>
          <p>2021</p>
          <p>Ironhack</p>
          <p>Madrid</p>
          <p>
            <strong>
              Web Development bootcamp 9 semanas HTML | CSS | JavaScript (ES6) |
              React ExpressJs | NodeJs | MongoDb | Axios
            </strong>
          </p>
        </div>
        <hr />
        <div className='academic-education__grid'>
          <p>2006 - 2008</p>
          <p>CICE</p>
          <p>Madrid</p>
          <p>
            <strong>
              Carrera Profesional de Diseño Gráfico, Producción Web y
              Comunicación Audiovisual con Especialización en Dirección de Arte
              (TDC)
            </strong>
          </p>
        </div>
      </section>
      <div className='page-skills__contact'>
        <p>
          Si necesitas más información o tienes alguna duda ponte en{' '}
          <strong>
            <Link className='link-contact' to='/contact'>
              contacto
            </Link>
          </strong>{' '}
          conmigo.
        </p>
      </div>
    </div>
  );
};
