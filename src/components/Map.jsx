import React, { useEffect, useState } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { API_URL } from "../config";

const mapStyles = {
  border: "4px solid #FF6148",
  borderRadius: "16px",
  boxShadow: "0px 5px 20px 3px rgba(0,0,0,0.5)",
  width: "100vh",
  height: "50vh",
};

function MapContainer(props) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`${API_URL}/coordinate`, {
      method: "GET",
    })
      .then((gelenData) => gelenData.json())
      .then((coor) => setData(coor[0]));
  }, []);
  return (
    <Map
      google={props.google}
      zoom={10}
      style={mapStyles}
      initialCenter={{
        lat: "41.0391683",
        lng: "28.9982707",
      }}
    >
      <Marker
        position={{ lat: data.latitude, lng: data.longitude }}
        name={"Kenyatta International Convention Centre"}
      />
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBkWiU-ML1wb26NEwP06Dqz1DlYnLB4N94",
})(MapContainer);
