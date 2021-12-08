import React, { useState, useEffect } from "react";
import firebase from "../firebaseConfig";
import ProgressBar from "@ramonak/react-progress-bar";

const Battery = () => {
  const [battery, setBattery] = useState("");
  useEffect(() => {
    setTimeout(() => {
      firebase
        .database()
        .ref("batt")
        .on("value", (battery) => {
          setBattery(battery.toJSON());
        });
    }, 2000);
  }, []);
  return (
    <div className="text-textColor mt-10 lg:mt-80 md:w-28 lg:w-16 mb-14 flex flex-col gap-20 font-Montserrat font-bold items-center">
      <h1>Battery</h1>
      <ProgressBar
        width="220px"
        maxCompleted={100}
        labelSize="16px"
        labelAlignment="center"
        className={`transform ${
          battery <= 20 ? "border-lowBatteryRed" : "border-textColor"
        } border-2 rounded-lg -rotate-90 font-Montserrat filter drop-shadow-lg`}
        labelColor={`${battery <= 20 ? "#F0FFFF" : "#2c3e50"}`}
        height="70px"
        borderRadius="0px"
        baseBgColor=""
        bgColor={`${battery <= 20 ? "#FF6148" : "#F0FFFF"}`}
        completed={battery}
      />
    </div>
  );
};

export default Battery;
