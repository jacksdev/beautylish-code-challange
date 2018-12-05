import React from 'react';
import mainLogo from'../img/logo_desktop_1x.png';


const LogoBar = ({ brand }) => (
  <div className='logobar'>
    <a href='https://www.beautylish.com/' border='0'><img className='logobar__img' alt="Logo" /></a>
    <div className='logobar__blurb'>
      {brand.name}
    </div>
  </div>

);

export default LogoBar;
