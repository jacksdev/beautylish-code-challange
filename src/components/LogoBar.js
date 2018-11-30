import React from 'react';
import mainLogo from'../img/logo_desktop_1x.png';


const divStyle = {
  background: '#000',
  height: '40px',
  color: '#fff',
  display: 'flex'
}

const imgStyle = {
  padding: '10px',
  borderRight: '1px solid #fff'
}

const logoBlurb = {
  fontSize:'1.9rem',
  margin: '10px 0 0 10px'
}

const LogoBar = (props) => (
  <div style={divStyle}>
    <img src={mainLogo} style={imgStyle} alt="Logo" />
    <div style={logoBlurb}>
      BY TERRY
    </div>
  </div>

);

export default LogoBar;
