import React from 'react';
import p1 from '../../../../img/F1.jpg';
import p2 from '../../../../img/F2.jpg';
import p3 from '../../../../img/F3.jpg';
import p4 from '../../../../img/F4.jpg';
import p5 from '../../../../img/F5.jpg';
import p6 from '../../../../img/F6.jpg';
import p7 from '../../../../img/F7.jpg';
import p8 from '../../../../img/F8.jpg';
import p9 from '../../../../img/F9.jpg';
import p10 from '../../../../img/F10.jpg';
import p11 from '../../../../img/F11.jpg';
import p12 from '../../../../img/F12.jpg';
import p13 from '../../../../img/F13.jpg';
import p14 from '../../../../img/F14.jpg';
import p15 from '../../../../img/F15.jpg';
import p16 from '../../../../img/F16.jpg';
import p17 from '../../../../img/F17.jpg';
import p18 from '../../../../img/F18.jpg';
import p20 from '../../../../img/F20.jpg';
import p21 from '../../../../img/F21.jpg';
import p22 from '../../../../img/F22.jpg';
import p23 from '../../../../img/F23.jpg';
import p24 from '../../../../img/F24.jpg';
import p25 from '../../../../img/F25.jpg';
import p26 from '../../../../img/F26.jpg';
import p27 from '../../../../img/F27.jpg';
import p28 from '../../../../img/F28.jpg';
import p30 from '../../../../img/F30.jpg';
import p31 from '../../../../img/F31.jpg';
import p32 from '../../../../img/F32.jpg';
import p33 from '../../../../img/F33.jpg';
import p34 from '../../../../img/F34.jpg';
import p35 from '../../../../img/F35.jpg';
import p36 from '../../../../img/F36.jpg';
import p37 from '../../../../img/F37.jpg';
import p38 from '../../../../img/F38.jpg';
import p39 from '../../../../img/F39.jpg';
import p40 from '../../../../img/F40.jpg';
import p41 from '../../../../img/F41.jpg';
import p42 from '../../../../img/F42.jpg';
import p43 from '../../../../img/F43.jpg';

export const Photo = () => {
  const photos = [
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    p8,
    p9,
    p10,
    p11,
    p12,
    p13,
    p14,
    p15,
    p16,
    p17,
    p18,
    p20,
    p21,
    p22,
    p23,
    p24,
    p25,
    p26,
    p27,
    p28,
    p30,
    p31,
    p32,
    p33,
    p34,
    p35,
    p36,
    p37,
    p38,
    p39,
    p40,
    p41,
    p42,
    p43,
  ];

  return (
    <div className='photo-grid'>
      {photos.map((items, index) => (
        <img
          key={index}
          className='photo-grid__img'
          src={items}
          alt='Imagen corporativa'
        />
      ))}
    </div>
  );
};
