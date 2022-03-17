import React from 'react';
import r1 from '../../../../img/r1.jpg';
import r2 from '../../../../img/r2.jpg';
import r3 from '../../../../img/r3.jpg';
import r4 from '../../../../img/r4.jpg';
import r5 from '../../../../img/r5.jpg';
import r6 from '../../../../img/r6.jpg';
import r7 from '../../../../img/r7.jpg';
import r8 from '../../../../img/r8.jpg';
import r9 from '../../../../img/r9.jpg';
import r10 from '../../../../img/r10.jpg';
import r11 from '../../../../img/r11.jpg';
import r12 from '../../../../img/r12.jpg';
import r13 from '../../../../img/r13.jpg';
import r14 from '../../../../img/r14.jpg';
import r15 from '../../../../img/r15.jpg';
import r16 from '../../../../img/r16.jpg';
import r17 from '../../../../img/r17.jpg';
import r18 from '../../../../img/r18.jpg';
import r19 from '../../../../img/r19.jpg';
import r20 from '../../../../img/r20.jpg';
import r21 from '../../../../img/r21.jpg';
import r22 from '../../../../img/r22.jpg';
import r23 from '../../../../img/r23.jpg';
import r24 from '../../../../img/r24.jpg';

export const Wear = () => {
  const wear = [
    r1,
    r2,
    r3,
    r4,
    r5,
    r6,
    r7,
    r8,
    r9,
    r10,
    r11,
    r12,
    r13,
    r14,
    r15,
    r16,
    r17,
    r18,
    r19,
    r20,
    r21,
    r22,
    r23,
    r24,
  ];
  return (
    <div className='wear-grid'>
      {wear.map((item, index) => (
        <img
          key={index}
          className='wear-grid__img'
          src={item}
          alt='Imagen de ropa deportiva'
        />
      ))}
    </div>
  );
};
