import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import React, { useState } from "react";

function GetIcon() {
  return L.icon({
    iconUrl: require("../../assets/locationIcon.png"),
    iconSize: [24, 24],
  });
}

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e: any) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={GetIcon()}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

const Map = () => {
  const position = [1.35, 103.8];

  const locations = [
    { name: "west", position: [1.35735, 103.7], size: 40, forecast: "cloudy" },
    { name: "east", position: [1.35735, 103.94], size: 30, forecast: "cloudy" },
    { name: "north", position: [1.4, 103.8], size: 50, forecast: "heavy-rain" },
  ];
  return (
    <MapContainer
      center={[51.0, 19.0]}
      zoom={4}
      maxZoom={18}
      style={{ height: "100vh", padding: 0 }}

      maxBounds={[
        [-90, -180],
        [90, 180],
      ]}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location: any) => (
        <Marker position={location.position} icon={GetIcon()}>
          <Popup>
            {location.name} - {location.forecast}
          </Popup>
        </Marker>
      ))}
      {/* <LocationMarker /> */}
    </MapContainer>
  );
};

export default Map;
