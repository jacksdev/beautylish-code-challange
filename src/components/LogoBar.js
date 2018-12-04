import React from 'react';
import mainLogo from'../img/logo_desktop_1x.png';


const LogoBar = ({ brand }) => (
  <div className='logobar'>
    <img src={mainLogo} className='logobar__img' alt="Logo" />
    <div className='logobar__blurb'>
      {brand.name}
    </div>
  </div>

);

export default LogoBar;
