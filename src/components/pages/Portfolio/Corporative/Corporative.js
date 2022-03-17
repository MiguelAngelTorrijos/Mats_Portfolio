import React from 'react';
import corp1 from '../../../../img/imcorp1.jpg';
import corp2 from '../../../../img/imcorp2.jpg';
import corp3 from '../../../../img/imcorp3.jpg';
import corp4 from '../../../../img/imcorp4.jpg';
import corp5 from '../../../../img/imcorp5.jpg';
import corp6 from '../../../../img/imcorp6.jpg';
import corp7 from '../../../../img/imcorp7.jpg';
import corp8 from '../../../../img/imcorp8.jpg';
import corp9 from '../../../../img/imcorp9.jpg';
import corp10 from '../../../../img/imcorp10.jpg';
import corp11 from '../../../../img/imcorp11.jpg';
import corp12 from '../../../../img/imcorp12.jpg';
import corp13 from '../../../../img/imcorp13.jpg';
import corp14 from '../../../../img/imcorp14.jpg';

export const Corporative = () => {
  const corporative = [
    corp1,
    corp2,
    corp3,
    corp4,
    corp5,
    corp6,
    corp7,
    corp8,
    corp9,
    corp10,
    corp11,
    corp12,
    corp13,
    corp14,
  ];
  return (
    <div className='corporative-grid'>
      {corporative.map((item, index) => (
        <img
          key={index}
          className='corporative-grid__img'
          src={item}
          alt='Imagen corporativa'
        />
      ))}
    </div>
  );
};
