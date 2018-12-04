import React from 'react';

import ProductItem from './ProductItem';

import tropicalImg from'../img/tropical_sunset_1x.jpg';
import savannahImg from'../img/savannah_love_1x.jpg';


const imgArray = [
  tropicalImg,
  savannahImg
]

const ProductList = ({variants, handleAddItem, isAdding}) => (
  <div className='container'>
    {
      //iterate over variant array and build out items
      variants.map((item , index) => (
        <ProductItem
          key={index}
          cid={item.cid}
          img={imgArray[index]}
          name={item.name}
          shortDescription={item.short_description}
          description={item.description}
          size ={item.size}
          price={item.price}
          itemClass={index % 2 === 0 ? 'productitem' : 'productitem--reverse'}
          tooltipClass={index % 2 === 0 ? 'tooltiptextVisible' : 'tooltiptextVisible--reverse'}
        />
      ))
    }
  </div>
);

export default ProductList;
