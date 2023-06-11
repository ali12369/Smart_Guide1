import React from 'react';
import '../App.css';
import Cards from '../components/Cards';
import HeroSection from '../components/HeroSection';
import Layout from '../layout/mainlayout';
import Location from '../components/Location' ; 
const Client =() => {


return(
  <>
  <Layout>
  
  <h1>choisir votre domaine de recherche</h1>   
  
  <Cards />
  <p>Autoriser accée locatlisation </p>
  <br/>
  <Location/>
  </Layout>
  </>
    
);








}
export default Client;