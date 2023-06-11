import React from 'react';
import '../App.css';
import Cards from '../components/Cards';
import HeroSection from '../components/HeroSection';
import Layout from '../layout/mainlayout';

function Home() {
    return (
    <>
    <Layout>
    <HeroSection />
    <h1>Decouvrir ces  EPIC Destinations!</h1>   
    
    <Cards />
    </Layout>
    </>
);
}

export default Home;