import React, { useState } from "react";
import { Map, NavigationControl } from "react-map-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import maplibregl from "maplibre-gl";
import lcicon from "../images/icons8-location-50.png";

function Location() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLatitude = position.coords.latitude;
          const userLongitude = position.coords.longitude;
          setLatitude(userLatitude);
          setLongitude(userLongitude);
        },
        (error) => {
          console.error("Erreur de géolocalisation :", error);
        }
      );
    } else {
      console.error(
        "La géolocalisation n'est pas supportée par ce navigateur."
      );
    }
  };
  // // Function to get nearby restaurants using MapTiler API
  // function getNearbyRestaurants(latitude, longitude, apiKey) {
  //   // Create the API request URL
  //   // var apiUrl = `https://api.maptiler.com/places/v1/nearby?lat=${latitude}&lon=${longitude}&categories=restaurant&key=${apiKey}`;
  //   var apiUrl = `https://api.maptiler.com/places/v1/${apiKey}/nearby/${longitude},${latitude}?categories=restaurant`;
  //   // Make a GET request to the MapTiler API
  //   fetch(apiUrl)
  //     .then(response => response.json())
  //     .then(data => {
  //       // Process the response data and display restaurant details
  //       data.features.forEach(place => {
  //         console.log(place.properties.name); // Display the name of the restaurant
  //         console.log(place.properties.address); // Display the address of the restaurant
  //         console.log('-----');
  //       });
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });
  // }

  // // MapTiler Cloud API key
  // var apiKey = 'ML3e2nr7F1zPBZpjgDMD';
  console.log("location Latitude : ", latitude);
  console.log("location Longitude : ", longitude);

  // // Call the function to get nearby restaurants
  // const result = getNearbyRestaurants(latitude,longitude, apiKey);
  // console.log('result : ', result)
  const buttonStyle = { backgroundColor: "white", borderRadius: "30px" };
  return (
    <div>
      <button onClick={handleLocationClick} style={buttonStyle}>
        <img src={lcicon} />
      </button>
      {latitude && longitude && (
        <Map
          mapLib={maplibregl}
          initialViewState={{
            // longitude: 15.62662018,
            // latitude: 25.2125578,
            longitude: 10.15771251,
            latitude: 36.83921256,
            zoom: 14,
          }}
          style={{ width: "100%", height: " calc(100vh - 77px)" }}
          mapStyle="https://api.maptiler.com/maps/streets/style.json?key=ML3e2nr7F1zPBZpjgDMD"
        >
          <NavigationControl position="top-left" />
        </Map>
      )}
    </div>
  );
}

export default Location;
