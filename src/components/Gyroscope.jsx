import React, { useEffect, useState } from "react";
import firebase from "../firebaseConfig";

const Gyroscope = () => {
  const [deg, setDeg] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      firebase
        .database()
        .ref("gyroY")
        .on("value", (gyroY) => {
          setDeg(gyroY.toJSON());
        });
    }, 2000);
  }, []);
  return (
    <div className="flex items-center gap-2 pr-6">
      <h1 className="text-textColor font-Montserrat font-bold text-sm">0°</h1>
      <div className="flex w-96 flex-col h-16 lg:h-60 border-2 items-center justify-center transform transition-all">
        <div className="h-1/2 w-full bg-blue-300" />
        <div
          className={`w-52 absolute h-1 rounded-full ${
            deg === 0 ? "bg-white" : "bg-black"
          } transform transition-all`}
          style={{
            transform: [`rotate(${deg}deg)`],
            transitionProperty: "transform",
            transitionDuration: 500,
          }}
        />
        <div className="h-1/2 w-full bg-blue-500" />
      </div>
    </div>
  );
};

export default Gyroscope;
