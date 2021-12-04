import React, { useEffect, useState } from "react";
import ThermometerComponent from "react-thermometer-component";
import { API_URL } from "../config";

const Thermometer = () => {
  const [heat, setHeat] = useState("");
  useEffect(() => {
    fetch(`${API_URL}/thermometer`, {
      method: "GET",
    })
      .then((x) => x.json())
      .then((gelen) => setHeat(gelen[0]));
  }, []);
  return (
    <ThermometerComponent
      theme="dark"
      value={heat.heat}
      max="35"
      steps="6"
      format="°C"
      size="large"
      height="250"
    />
  );
};

export default Thermometer;
