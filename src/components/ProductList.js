import React from 'react';

import ProductItem from './ProductItem';




const ProductList = ({variants, handleAddItem}) => (
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
          handleAddItem={handleAddItem}
        />
      ))
    }
  </div>
);

export default ProductList;
