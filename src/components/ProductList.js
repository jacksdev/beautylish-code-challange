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

const ProductList = ({ variants }) => (
  <React.Fragment>
    <div style={productListDiv}>
      <div>
        <img src={tropicalImg}  border='0' />
      </div>
      <div>
        <h1>{variants[0].name.replace(/[\d -]+/g,'')}</h1>
        <h3>{variants[0].short_description}</h3>
        <p>
          {variants[0].description}
        </p>
        {variants[0].size}<br />
        {variants[0].price}
        <br />
        <br />
        <button>Add to bag</button>
      </div>
    </div>

    <div style={productListDiv}>

      <div>
        <h1>{variants[0].name.replace(/[\d -]+/g,'')}</h1>
        <h3>{variants[0].short_description}</h3>
        <p>
          {variants[0].description}
        </p>
        {variants[0].size}<br />
        {variants[0].price}
        <br />
        <br />
        <button>Add to bag</button>
      </div>
      <div>
        <img src={tropicalImg}  border='0' />
      </div>
    </div>

  </React.Fragment>


);

export default ProductList;
