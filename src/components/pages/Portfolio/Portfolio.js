import React, { useState } from 'react';
import { Corporative } from './Corporative/Corporative';
import { LogosPortfolio } from './LogosPortfolio/LogosPortfolio';
import { Photo } from './Photo/Photo';
import { Various } from './Various/Various';
import { Wear } from './Wear/Wear';

export const Portfolio = () => {
  const portfolioMenu = [
    'Logos',
    'Imagén coorporativa',
    'Fotografía',
    'Diseño de ropa',
    'Varios',
  ];
  const [myPortfolio, setMyPortfolio] = useState('');
  const title = 'portfolio';
  const titleCharacters = title.split('');

  return (
    <div className='just-center-contact'>
      <article className='page-portfolio'>
        <h1 className='page-portfolio__title'>
          {titleCharacters.map((characters, index) => (
            <span key={index} className='a'>
              {characters}
            </span>
          ))}
        </h1>
        <ul className='page-portfolio__menu'>
          {portfolioMenu.map((portfolioItems) => (
            <li
              className='page-portfolio__menu__items'
              onClick={() => setMyPortfolio(portfolioItems)}
              key={portfolioItems}
            >
              {portfolioItems}
            </li>
          ))}
        </ul>
        {myPortfolio === 'logos' ? (
          <LogosPortfolio />
        ) : myPortfolio === 'Imagén coorporativa' ? (
          <Corporative />
        ) : myPortfolio === 'Fotografía' ? (
          <Photo />
        ) : myPortfolio === 'Diseño de ropa' ? (
          <Wear />
        ) : myPortfolio === 'Varios' ? (
          <Various />
        ) : (
          <LogosPortfolio />
        )}
      </article>
    </div>
  );
};
