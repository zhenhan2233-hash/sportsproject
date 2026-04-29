import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";

import MapSearch from "../components/MapSearch"; // 👈 ADD THIS

function Map() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer
        center={[37.7749, -122.4194]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* 👇 ADD SEARCH BAR */}
        <MapSearch />

        <Marker position={[37.7749, -122.4194]}>
          <Popup>My Location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;