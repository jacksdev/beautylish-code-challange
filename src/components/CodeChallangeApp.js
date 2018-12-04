
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

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
  handleAddItem = (cid) => {
    let query = { "cid": cid }
    let headers = {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
    console.log(query)

    axios.post('https://www.beautylish.com/rest/interview-variant', query, {headers})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };



  //Life cycles
  componentDidMount(){

  };

  componentDidUpdate(prevProps, prevState){

  };


// !!!! --- RENDER ---!!!

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
        <ProductList variants={variants} handleAddItem={this.handleAddItem} />
        <Footer data={general}  />
      </div>
    );
  };
};



export default CodeChallangeApp;
