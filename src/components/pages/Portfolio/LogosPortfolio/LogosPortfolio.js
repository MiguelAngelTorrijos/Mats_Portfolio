import React from 'react';
import logo1 from '../../../../img/LOGOFOLIO-01.jpg';
import logo2 from '../../../../img/LOGOFOLIO-02.jpg';
import logo3 from '../../../../img/LOGOFOLIO-03.jpg';
import logo4 from '../../../../img/LOGOFOLIO-04.jpg';
import logo5 from '../../../../img/LOGOFOLIO-05.jpg';
import logo6 from '../../../../img/LOGOFOLIO-06.jpg';
import logo7 from '../../../../img/LOGOFOLIO-07.jpg';
import logo8 from '../../../../img/LOGOFOLIO-08.jpg';
import logo9 from '../../../../img/LOGOFOLIO-09.jpg';
import logo10 from '../../../../img/LOGOFOLIO-10.jpg';
import logo11 from '../../../../img/LOGOFOLIO-11.jpg';
import logo12 from '../../../../img/LOGOFOLIO-12.jpg';
import logo13 from '../../../../img/LOGOFOLIO-13.jpg';
import logo14 from '../../../../img/LOGOFOLIO-14.jpg';
import logo15 from '../../../../img/LOGOFOLIO-15.jpg';
import logo16 from '../../../../img/LOGOFOLIO-16.jpg';
import logo17 from '../../../../img/LOGOFOLIO-17.jpg';
import logo18 from '../../../../img/LOGOFOLIO-18.jpg';
import logo19 from '../../../../img/LOGOFOLIO-19.jpg';
import logo20 from '../../../../img/LOGOFOLIO-20.jpg';
import logo21 from '../../../../img/LOGOFOLIO-21.jpg';
import logo22 from '../../../../img/LOGOFOLIO-22.jpg';
import logo23 from '../../../../img/LOGOFOLIO-23.jpg';
import logo24 from '../../../../img/LOGOFOLIO-24.jpg';
import logo25 from '../../../../img/LOGOFOLIO-25.jpg';
import logo26 from '../../../../img/LOGOFOLIO-26.jpg';

export const LogosPortfolio = () => {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14,
    logo15,
    logo16,
    logo17,
    logo18,
    logo19,
    logo20,
    logo21,
    logo22,
    logo23,
    logo24,
    logo25,
    logo26,
  ];

  return (
    <div className='portfolio-grid'>
      {logos.map((items, index) => (
        <img
          key={index}
          className='portfolio-grid__logo'
          src={items}
          alt='logo'
        />
      ))}
    </div>
  );
};
