import React from 'react';

import ProductItem from './ProductItem';




const ProductList = ({variants, handleAddItem, isAdding}) => (
  <div>
    {
      variants.map((item , index) => (
        <ProductItem
          key={index}
          cid={item.cid}
          name={item.name}
          shortDescription={item.short_description}
          description={item.description}
          size ={item.size}
          price={item.price}
        />
      ))
    }
  </div>
);

export default ProductList;
