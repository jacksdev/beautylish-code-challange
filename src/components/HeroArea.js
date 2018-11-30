import React from 'react';
import bgHero from'../img/hero_desktop_1x.jpg';


const heroDiv = {
  background: `url(${bgHero}) no-repeat center center`,
  backgroundSize: 'auto',
  backgroundSize: 'cover',
  textAlign:'center',
  height: '808px'
}

const introDiv = {
  display:'inline-block',
  marginTop: '350px',
  padding: '0 40px',
  background: '#fff',
  color: '#f0725d',
  fontSize: '7.2rem',
}

const HeroArea = (props) => (

  <div style={heroDiv}>
    <div style={introDiv}>
      Tropical Sunset Collection
    </div>
  </div>

);

export default HeroArea;
