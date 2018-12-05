import React, {useState } from 'react';
import axios from 'axios';


function ProductItem({
  cid,
  img,
  name,
  shortDescription,
  description,
  size,
  price,
  itemClass,
  tooltipClass
}){

  //define state props and handlers !!experimental syntax not for production
  const [isAdding, disableBttn] = useState(false);
  const [showTooltip, handleShowTool] = useState(false);
  const [responseName, handleResponseName] = useState('...');

  //strip number and dash from data source
  const strippedName = name.replace(/[\d -]+/g,'');
  const computedToolTipStyle = tooltipClass;

  //Handle 'Add to bag' click
  const handleAddItem = (cid) => {

    //prevent multiple clicks
    disableBttn(true)
    //reset tooltip hidden class
    handleShowTool(false)

    //set request & headers
    let query = { cid }
    let headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }

    //post request
    axios.post('https://cors-anywhere.herokuapp.com/https://www.beautylish.com/rest/interview-variant', query, {headers})
      .then((response) => {
        //reactivate button
        disableBttn(false)
        //display tooltip
        handleShowTool(true)
        //set response  data in tooltip
        handleResponseName(response.data.name)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={itemClass}>
        <div className='productitem__img'>
          <img src={img}  width='100%' border='0' />
        </div>

        <div className='productitem__description'>
          <span className='productitem__header'>{strippedName}</span><br />
          {shortDescription}
          <p>
            {description}
          </p>
          {size}
          <br />
          <br />
          <b>{price}</b>
          <br />
          <br />
          <div className="tooltip">
            <button
              disabled={isAdding}
              className='mainbttn'
              onClick={() => {
                handleAddItem(cid)
              }}>{isAdding ? 'Adding...' : 'Add to bag'}
            </button>
            <span className={
              showTooltip ? 'tooltiptextVisible--reverse' : 'tooltiptextHidden'
            }>
              ADDED
              <br /><br />
              Sun Designer
              <br />
              <b>{responseName}</b>
              <br /><br />
              <button className='mainbttn'>VIEW BAG</button>
            </span>
          </div>
        </div>

      </div>
  )
};

export default ProductItem;






















ProductItem
