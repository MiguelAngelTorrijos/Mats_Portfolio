import React from 'react';
import LogoHeader1 from '../../../../img/logo_header_1.svg';
import LogoHeader0 from '../../../../img/logo_header_0.svg';

export const LogoHeader = () => {
  return (
    <div className='logoHeader'>
      <img className='logoHeader__1' src={LogoHeader1} alt='Logo Mats' />
      <img className='logoHeader__3 button' src={LogoHeader0} alt='Logo Mats' />
    </div>
  );
};
