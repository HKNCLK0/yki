import React from "react";
import { Battery, Map, Gyroscope, Footer, Thermometer } from "./components";
import DeviceOrientation, { Orientation } from "react-screen-orientation";

function App() {
  return (
    <DeviceOrientation lockOrientation={"landscape"}>
      <Orientation orientation="landscape" alwaysRender={false}>
        <div className="w-screen h-screen bg-bgMain flex items-start justify-around pt-1 lg:pt-8">
          <Battery />
          <div className="flex flex-col gap-4 lg:gap-6 items-center justify-center">
            <h1 className="text-textColor font-Montserrat font-bold text-base lg:text-3xl">
              Yer Kontrol İstasyonu
            </h1>
            <div className="w-1/2 h-1/2 flex items-center justify-start flex-col font-Montserrat font-bold">
              <Map />
            </div>
            <Gyroscope />
            <Footer />
          </div>
          <Thermometer />
        </div>
      </Orientation>
      <Orientation orientation="portrait" alwaysRender={false}>
        <div className="w-screen h-screen flex flex-col items-center text-center py-16 gap-16 text-textColor font-Montserrat font-bold bg-bgMain">
          <h1>Yer Kontrol İstasyonu</h1>
          <h1>
            Lütfen Telefonunuzun Otomatik Döndürme Özelliğini Açın ve{" "}
            <u>Yan Çevirin</u>
          </h1>
          <h1 className="opacity-50">
            Hakan Çelik
            <br />
            Emirhan Irmak
          </h1>
          <Footer />
        </div>
      </Orientation>
    </DeviceOrientation>
  );
}

export default App;
