import React from 'react';


const SectionIntro = ({ product }) => (
  <div className="container">
    <div className='sectionintro'>
      BY TERRY
      <span className='sectionintro__headline'>Limited Edition {product.name}</span>
      <br />
      {product.description}
    </div>
  </div>
);


export default SectionIntro;
