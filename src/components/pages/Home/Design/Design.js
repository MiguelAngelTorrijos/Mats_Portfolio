import React from 'react';
import pantone1 from '../../../../img/pantone_1.svg';
import pantone2 from '../../../../img/pantone_2.svg';
import pantone3 from '../../../../img/pantone_3.svg';


export const Design = () => {
  return (
    <div className='color-cart'>
      <img className='color-cart__1' src={pantone1} alt='carta de colores' />
      <img className='color-cart__2' src={pantone2} alt='carta de colores' />
      <img className='color-cart__3' src={pantone3} alt='carta de colores' />
    </div>
  );
};
