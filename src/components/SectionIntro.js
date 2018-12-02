import React from 'react';



const sectionIntroDiv = {
  background: '#fff',
  padding: '20px',
  color: '#000',
  fontSize: '1.4rem'
}



const SectionIntro = ({ product }) => (
  <div style={sectionIntroDiv}>
    Limited Edition {product.name}
    <br />
    {product.description}
  </div>
);


export default SectionIntro;
