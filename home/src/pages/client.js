import React from "react";
import "../Styles/client.css";
import Cards from "../components/Cards";
import HeroSection from "../components/HeroSection";
import Layout from "../layout/mainlayout";
import Location from "../components/Location";
import { Link } from 'react-router-dom';

const Client = () => {
  return (
    <>
      <Layout>
        <h1>choisir votre domaine de recherche</h1>

        <Cards />

        <div className="loc">
          <p>Autoriser accée locatlisation </p>
          <br />
          <Location />
        </div>
        <div className="bmap">
          <Link to="/map">
            <div className="mapButton">Valider </div>
          </Link>
        </div>
      </Layout>
    </>
  );
};
export default Client;
