import React from "react";
import "./App.css";
// import Home from './pages/home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Connexion from "./pages/connexion";
import Home from "./pages/home";
import Confirm from "./pages/confirm";
import Client from "./pages/client";
import Admin from "./pages/admin";
import User from "./pages/User";
import Map from "./pages/map";
import SignUp from "./pages/SignUp";
import ClientsList from "./components/ClientsList";
import HotelsList from "./components/HotelsList";
import RestaurantsList from "./components/RestaurantsList";
import MedicalsList from "./components/MedicalsList";
import EntreprisesList from "./components/EntreprisesList";
import Contact from "./pages/contactus";
import AddMedical from "./components/AddMedical";
import AddFood from "./components/AddFood";
import { Feedback } from "@mui/icons-material";
import FeedBackList from "./components/FeedBackList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/confirm" element={<Confirm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/client" element={<Client />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />
        <Route path="/map" element={<Map />} />
        <Route path="/ClientsList" element={<ClientsList />} />
        <Route path="/HotelsList" element={<HotelsList />} />
        <Route path="/RestaurantsList" element={<RestaurantsList />} />
        <Route path="/MedicalsList" element={<MedicalsList />} />
        <Route path="/EntreprisesList" element={<EntreprisesList />} />
        <Route path="/Contactus" element={<Contact />} />
        <Route path="/MedicalsList/AddMedical" element={<AddMedical />} />
        <Route path="/RestaurantsList/AddFood" element={<AddFood />} />
        <Route path="/FeedBackList" element={<FeedBackList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
