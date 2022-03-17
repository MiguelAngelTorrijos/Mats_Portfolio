import React from 'react';
import { Link } from 'react-router-dom';
import profile1 from '../../../img/about1.JPG';
import profile2 from '../../../img/about2.jpg';
export const About = () => {
  return (
    <div className='just-center-contact'>
      <article className='page-about'>
        <h1 className='page-about__title'>
          <span className='a'>s</span>
          <span className='a'>o</span>
          <span className='a'>b</span>
          <span className='a'>r</span>
          <span className='a'>e</span>
          <span className='a none'>.</span>
          <span className='a'>m</span>
          <span className='a'>i</span>
        </h1>
        <p>
          <strong>Hola!</strong> 👋 Soy Mats. ¡Y hago cosas increíbles para
          gente increíble!
        </p>
        <p>
          Soy un desarrollador web con ~10 años de experiencia en diseño
          gráfico. He tenido la suerte de trabajar para empresas como Pfizer,
          Roche, MSD, Novartis y Astrazeneca.
        </p>
        <p>
          Me siento cómodo con una gran variedad de herramientas. Por lo
          general, estoy trabajando con React, la arquitectura de CSS, o
          diseñando con el paquete de Adobe Suite.
        </p>
        <p>
          Independientemente de las herramientas utilizadas, me encanta dar vida
          a las ideas. Me enorgullece crear soluciones innovadoras con
          experiencias de usuario pulidas. Esto mientras poseo un buen ojo para
          el diseño y el código bien estructurado.
        </p>
        <div className='page-about__hr'>
          <hr />
        </div>
        <div className='page-about__image1'>
          <img src={profile1} alt='Imagen de perfil' />
        </div>
        <div className='page-about__hr'>
          <hr />
        </div>
        <p>
          Me encanta la fotografía. Aunque no soy fotógrafo profesional sino más
          bien un entusiasta, he colaborado para marcas como Pure Racer. Siempre
          que puedo estoy trasteando con mi cámara y editando en Ligthroom.
        </p>
        <div className='page-about__hr'>
          <hr />
        </div>
        <div className='page-about__image2'>
          <img src={profile2} alt='Imagen de perfil' />
        </div>
        <div className='page-about__hr'>
          <hr />
        </div>
        <p>
          Cuando despego los ojos de mi monitor, en mi tiempo "libre" podría
          estar haciendo cualquier cosa. Me gusta mucho el ejercicio funcional,
          montar en moto y degustar una buena &#127828; .
        </p>
        <p>
          Durante la temporada de otoño a primavera, es probable que me
          encuentres en un pabellón jugando a &#129342; y en verano mi pasión
          por el balonmano playa me transporta a numerosas zonas costeras de
          España. Además de eso, cuando puedo viajo a la nieve a hacer
          &#127938;. Si tengo suerte, aprovecho algunos momentos para jugar a la
          Play (Fifa forever). Y, por último, me gusta leer un buen libro
          (aunque sea digital) más concretamente la novela negra o
          histórica.
        </p>
        <p>
          ¿Tienes un rato para discutir sobre hamburguesas u otro tema? ¿Un
          proyecto del que te gustaría hablar? ¿Una oportunidad de trabajo?
          ¿Quizás quieras decir "Hola"? Ponte en{' '}
          <strong>
            <Link className='link-contact' to='/contact'>
              contacto
            </Link>
          </strong>{' '}
          conmigo.
        </p>
        <h3 className='page-about__h3'>Gracias por visitarme! ☠️</h3>
      </article>
    </div>
  );
};
