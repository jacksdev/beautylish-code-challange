
import React from 'react';
import ReactDOM from 'react-dom';

import LogoBar from './LogoBar';
import HeroArea from './HeroArea';
import SectionIntro from './SectionIntro';
import ProductList from './ProductList';
import Footer from './Footer';

import dataSource from '../data.json';

class CodeChallangeApp extends React.Component{

  state = {
    items: [],
    selectedItem: undefined
  };


  //METHODS


  //Life cycles
  componentDidMount(){

  };

  componentDidUpdate(prevProps, prevState){

  };


// !!!! --- RENDER ---!!!

  render(){
    const title ="Code Challange";
    const subtitle = "Get these done and then you can chill.";

    console.log(dataSource);

    return (
      <div>
        <LogoBar />
        <HeroArea />
        <SectionIntro />
        <ProductList />
        <Footer />
      </div>
    );
  };
};



export default CodeChallangeApp;
