import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  return (
    <MapContainer
      center={[51.0, 19.0]}
      zoom={4}
      maxZoom={18}
      style={{ height: "100vh",padding:0 }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[40.505, -100.09]}>
        <Popup>I am a pop-up!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
