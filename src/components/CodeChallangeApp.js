
import React from 'react';
import ReactDOM from 'react-dom';

import LogoBar from './LogoBar';
import HeroArea from './HeroArea';
import SectionIntro from './SectionIntro';
import ProductList from './ProductList';
import Footer from './Footer';

import dataSource from '../data.json';

class CodeChallangeApp extends React.Component{


  render(){
    const {
      brand,
      product,
      variants,
      general
    } = dataSource;

    return (
      <div>
        <LogoBar brand={brand} />
        <HeroArea />
        <SectionIntro product={product} />
        <ProductList variants={variants} />
        <Footer general={general} />
      </div>
    );
  };
};



export default CodeChallangeApp;
