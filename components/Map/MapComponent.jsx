import styles from "./index.module.scss";
import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";
// const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export default function MapComponent({ latitude, longitude }) {
  const center = {
    lat: latitude,
    lng: longitude,
  };
  return (
    <div className={styles.Map}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBdNJQgwZIe-W_2steFOgqF0NrRcqoP0bI" }}
        center={{ lat: latitude, lng: longitude }}
        zoom={14}
      >
        <FaMapMarkerAlt
          className={styles.Marker}
          size={40}
          position={{ lat: latitude, lng: longitude}}
        />
      </GoogleMapReact>
    </div>
  );
}
