import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map() {
  return (
    <MapContainer
      center={[37.7749, -122.4194]}
      zoom={13}
      style={{ height: "calc(100vh - 140px)", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker position={[37.7749, -122.4194]}>
        <Popup>My Location</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;