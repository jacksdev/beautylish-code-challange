
import React from 'react';

import savannahImg from'../img/savannah_love_1x.jpg';
import tropicalImg from'../img/tropical_sunset_1x.jpg';


const productListDiv = {
  background: '#fff',
  padding: '20px',
  color: '#000',
  fontSize: '1.4rem',
  display: 'flex'
}


const ProductItem = ({
  cid,
  name,
  shortDescription,
  description,
  size,
  price,
  handleAddItem
}) => (

  <div style={productListDiv}>
      <div>
        <img src={tropicalImg}  border='0' />
      </div>
      <div>
        <h1>{name.replace(/[\d -]+/g,'')}</h1>
        <h3>{shortDescription}</h3>
        <p>
          {description}
        </p>
        {size}<br />
        {price}
        <br />
        <br />
        <button
          onClick={(e) => {
            handleAddItem(cid)
          }}>Add to bag
        </button>
      </div>
    </div>
);

export default ProductItem;






















ProductItem
