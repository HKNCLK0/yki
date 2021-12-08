import React, { useEffect, useState } from "react";
import ThermometerComponent from "react-thermometer-component";
import firebase from "../firebaseConfig";

const Thermometer = () => {
  const [temp, setTemp] = useState("");
  useEffect(() => {
    setTimeout(() => {
      firebase
        .database()
        .ref("temp")
        .on("value", (temp) => {
          setTemp(temp.toJSON());
        });
    }, 2000);
  }, []);
  return (
    <div className="mt-12 lg:mt-72">
      <ThermometerComponent
        theme="dark"
        value={temp}
        max="35"
        steps="6"
        format="°C"
        size="large"
        height="250"
      />
    </div>
  );
};

export default Thermometer;
