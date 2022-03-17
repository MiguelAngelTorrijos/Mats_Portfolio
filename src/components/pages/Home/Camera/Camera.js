import React from 'react';
import flash from '../../../../img/camara_flash-01.png';
import soul from '../../../../img/camara_sombra.svg';
import polaroid from '../../../../img/camara_foto.svg';
import cameraBody from '../../../../img/camara.svg';

export const Camera = () => {

  return (
    <div className='camera'>
      <img className='camera__flash' src={flash} alt='Camara flash' />
      <img className='camera__soul' src={soul} alt='Camara sombra' />
      <div className='polaroid-mask'>
        <img
          className='camera__photo animation-photo'
          src={polaroid}
          alt='Fotografía'
        />
      </div>
      <img className='camera__body' src={cameraBody} alt='Camara' />
    </div>
  );
};
