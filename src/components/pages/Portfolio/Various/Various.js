import React from 'react';
import v1 from '../../../../img/v1.jpg';
import v2 from '../../../../img/v2.jpg';
import v3 from '../../../../img/v3.jpg';
import v4 from '../../../../img/v4.jpg';
import v5 from '../../../../img/v5.jpg';
import v6 from '../../../../img/v6.jpg';
import v7 from '../../../../img/v7.jpg';
import v8 from '../../../../img/v8.jpg';
import v9 from '../../../../img/v9.jpg';
import v10 from '../../../../img/v10.jpg';
import v11 from '../../../../img/v11.jpg';
import v12 from '../../../../img/v12.jpg';
import v13 from '../../../../img/v13.jpg';
import v14 from '../../../../img/v14.jpg';

export const Various = () => {
  const various = [v1, v2, v3, v4, v5, v6, v7, v8, v9, v10, v11, v12, v13, v14];
  return (
    <div className='various-grid'>
      {various.map((item, index) => (
        <img
          key={index}
          className='various-grid__img'
          src={item}
          alt='Imagen variada'
        />
      ))}
    </div>
  );
};
