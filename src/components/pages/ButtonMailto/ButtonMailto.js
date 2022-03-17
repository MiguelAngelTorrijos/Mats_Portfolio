import React from 'react';
import { Link } from 'react-router-dom';

const ButtonMailto = ({ mailto, label }) => {
  return (
    <Link
     className='link-contact'
      to='#'
      onClick={(e) => {
        window.location = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

export default ButtonMailto;
