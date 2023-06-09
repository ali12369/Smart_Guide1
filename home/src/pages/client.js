import React from 'react';
import '../App.css';
import Item from '../components/CardItem'
import '../components/Cards.css' ;

import HeroSection from '../components/HeroSection';
import Layout from '../layout/mainlayout';
const Client =(props) => {


return(
    <div className='cards'>
        <h1>Attraction populaire </h1> 
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <Item
              // src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='#'
              // path='/'
            />
            <Item
              // src='images/img-2.jpg'
            text='Travel through the Islands of Bali in a Private Cruise'
            label='<#>'
            // path='/'
            />
        </ul>
        <ul className='cards__items'>
            <Item
              // src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='#'
              // path='/'
            />
            
            <Item
              // src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='#'
              // path='/'
            />
          </ul>
        </div>
      </div>
    </div>
);








}
export default Client;