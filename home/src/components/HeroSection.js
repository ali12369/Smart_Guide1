import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import img from '../images/sousse.jfif'

function HeroSection() {
  return (
    <div className='hero-container'>
      
      <h1>COMMENCER L'ADVENTURE</h1>
      <p>Qu'est Ce Que Vous Attendez !</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Commencer
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
        Bande-annonce  <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;