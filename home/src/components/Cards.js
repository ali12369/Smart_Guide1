import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import food from '../images/food.jpg';
import medical from '../images/medical.jpg';
import hotel from '../images/hotel.jpg'; 
import parc from '../images/loisir.jpg' ; 



function Cards() {
  return (
    <div className='cards'>
      
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={food}
              text='Tecouvrir les meilleurs adresses '
              label='food'
              // path='/'
            />
            <CardItem
              src={medical}
              text='Trouver le plus proche aide medical '
              label='medical'
              // path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={hotel}
              text='Trouver les meilleurs hotels'
              label='hotel '
              // path='/'
            />
            
            <CardItem
              src={parc}
              text='Monuments et espaces-extérieurs'
              label='parc et monuments '
              // path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;