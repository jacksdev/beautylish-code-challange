import React from 'react';


const Footer = ({ general }) => (
  <div className='container'>
    <div className='footer'>
      <span className='footer__header'>{general.headline}</span>
      <div className='footer__itemcontainer'>
        <div className='footer__itemcontainer__items'>
          <span className='footer__itemcontainer__items__header'>{general.subhead_1}</span>
          <p>
          {general.copy_1}
          </p>
        </div>
        <div className='footer__itemcontainer__items'>
          <span className='footer__itemcontainer__items__header'>{general.subhead_2}</span>
          <p>
          {general.copy_2}
          </p>
        </div>
        <div className='footer__itemcontainer__items'>
          <span className='footer__itemcontainer__items__header'>{general.subhead_3}</span>
          <p>
          {general.copy_3}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
