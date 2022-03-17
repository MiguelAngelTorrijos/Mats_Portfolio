import React from 'react';
import rocket from '../../../../img/rocket.svg';
import fire from '../../../../img/fire.svg';
import cloud1 from '../../../../img/nube1.svg';
import cloud2 from '../../../../img/nube2.svg';
import stars1 from '../../../../img/stars1.svg';
import stars2 from '../../../../img/stars2.svg';
import lines1 from '../../../../img/lines1.svg';
import lines2 from '../../../../img/lines2.svg';
import lines3 from '../../../../img/lines3.svg';
export const Rocket = () => {
  return (
    <div className='rocket-gif'>
      <div className='rocket-gif rocket-movement'>
        <img className='rocket-gif__rocket' src={rocket} alt='Imagen cohete' />
        <img className='rocket-gif__fire' src={fire} alt='Imagen cohete' />
      </div>
      <img className='rocket-gif__cloud1' src={cloud1} alt='Imagen cohete' />
      <img className='rocket-gif__cloud2' src={cloud2} alt='Imagen cohete' />
      <img className='rocket-gif__stars1' src={stars1} alt='Imagen cohete' />
      <img className='rocket-gif__stars2' src={stars2} alt='Imagen cohete' />
      <img className='rocket-gif__lines1' src={lines1} alt='Imagen cohete' />
      <img className='rocket-gif__lines2' src={lines2} alt='Imagen cohete' />
      <img className='rocket-gif__lines3' src={lines3} alt='Imagen cohete' />
    </div>
  );
};
