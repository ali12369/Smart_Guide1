import * as React from "react";
import Map, { NavigationControl } from "react-map-gl";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

function map() {
  return (
    <div className="App">
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
    </div>
  );
}

export default map;
