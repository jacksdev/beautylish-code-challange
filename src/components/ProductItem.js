import React, {useState } from 'react';
import axios from 'axios';

import savannahImg from'../img/savannah_love_1x.jpg';
import tropicalImg from'../img/tropical_sunset_1x.jpg';


const productListDiv = {
  background: '#fff',
  padding: '20px',
  color: '#000',
  fontSize: '1.4rem',
  display: 'flex'
}



function ProductItem({
  cid,
  name,
  shortDescription,
  description,
  size,
  price
}){

  const [isAdding, disableBttn] = useState(false);
  const [showTooltip, handleShowTool] = useState(false);

  const strippedName = name.replace(/[\d -]+/g,'')


  const handleAddItem = (cid) => {

    disableBttn(true)
    handleShowTool(false)

    let query = { cid }
    let headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }

    axios.post('https://cors-anywhere.herokuapp.com/https://www.beautylish.com/rest/interview-variant', query, {headers})
      .then((response) => {
        disableBttn(false)
        handleShowTool(true)
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={productListDiv}>
        <div>
          <img src={tropicalImg}  border='0' />
        </div>
        <div>
          <h1>{strippedName}</h1>
          <h3>{shortDescription}</h3>
          <p>
            {description}
          </p>
          {size}<br />
          {price}
          <br />
          <br />
          <div className="tooltip">
            <button
              onClick={(e) => {
                handleAddItem(cid)
              }}>{isAdding ? 'Adding...' : 'Add to bag'}
            </button>
            <span className={
              showTooltip ? 'tooltiptextVisible' : 'tooltiptextHidden'
            }>
              ADDED
              <br />
              Sun Designer<br />
              {name}<br />
              <button>VIEW BAG</button>
            </span>
          </div>

        </div>
      </div>
  )
};

export default ProductItem;






















ProductItem
