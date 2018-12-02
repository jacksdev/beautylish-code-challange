import React from 'react';



const footerDiv = {
  background: '#fff',
  padding: '20px',
  color: '#000',
  fontSize: '1.4rem'
}



const Footer = ({ data }) => (
  <div style={footerDiv}>
    {data.headline}
    <div>
      {data.subhead_1}
      <p>
      {data.copy_1}
      </p>
    </div>
    <div>
      {data.subhead_2}
      <p>
      {data.copy_2}
      </p>
    </div>
    <div>
      {data.subhead_3}
      <p>
      {data.copy_3}
      </p>
    </div>
  </div>

);

export default Footer;
