import React from 'react';
import logo1 from '../../../img/logo_mats_animation1.svg';
import logo2 from '../../../img/logo_mats_animation2.svg';
import logo3 from '../../../img/logo_mats_animation3.svg';
import logo1White from '../../../img/logo_mats_animation1_white.svg';

export const LogoAnimated = () => {
  return (
    <>
      <div className='logo-animated'>
        <img className='logo1' src={logo1} alt='logo Mats' />
        <img className='logo1White' src={logo1White} alt='logo Mats' />

        <img className='logo2' src={logo2} alt='logo Mats' />

        <img className='logo3' src={logo3} alt='logo Mats' />
      </div>
    </>
  );
};
