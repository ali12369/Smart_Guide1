import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddFood = () => {
  const [name, setName] = useState("");
  const [categories, setCategories] = useState("");
  const [geocodes, setGeocodes] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      categories,
      geocodes,
      location,
    };

    try {
      const response = await axios.post(
        "http://localhost:5001/food/create_food",
        data
      );
      console.log("here1");
      console.log(response);
      if (response.status === 201) {
        setName("");
        setCategories("");
        setGeocodes("");
        setLocation("");
        console.log("here2");
        navigate("/MedicalsList");
        console.log("here3");
      } else {
        alert("Error submitting medical form. Please try again.");
      }
    } catch (error) {
      alert(
        "An error occurred while submitting the form. Please try again later."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "300px",
        margin: "auto",
      }}
    >
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <TextField
        label="Categories"
        value={categories}
        onChange={(e) => setCategories(e.target.value)}
        required
      />

      <TextField
        label="Geocodes"
        value={geocodes}
        onChange={(e) => setGeocodes(e.target.value)}
        required
      />

      <TextField
        label="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      />

      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default AddFood;
