import React from "react";
import MapContainer from "./components/Map";
import Footer from "./components/Footer";
import Thermometer from "./components/Thermometer";

function App() {
  return (
    <div className="w-screen h-screen bg-bgMain flex items-center justify-around">
      <div className="flex flex-col gap-24 items-center justify-center">
        <h1 className="text-textColor font-Montserrat font-bold text-3xl">
          Yer Kontrol İstasyonu
        </h1>
        <div className="w-1/2 h-1/2 flex items-center justify-start flex-col font-Montserrat font-bold">
          <MapContainer />
        </div>
        <Footer />
      </div>
      <Thermometer />
    </div>
  );
}

export default App;
