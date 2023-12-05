import React from 'react';
import Card from './Card';

export default function Shop() {
  let prices = [40, 46, 34, 45, 56, 35, 42, 39];
  let models = [
    "SpectraView",
    "OptiStyle",
    "CrystalClear",
    "VisionQuest",
    "LuxeFrames",
    "EleganceVue",
    "PrecisionOptics",
    "VistaVogue",
    "UrbanGaze",
    "EliteSight"
  ];

  return (
    <div className="Card-Container">
      <h1 className="head">
        <span>Our</span> Glasses
      </h1>

      {prices.map((element, index) => {
        return <Card key={index} imgSrc={index + 1} price={element} model={models[index]}/>;
      })}
    </div>
  );
}
