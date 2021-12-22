import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }
  function convertToCelcius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <span className="Temperature">
        <span className="TempRound">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C|
          <a href="/" onClick={convertToFarenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let farenheit = (props.celsius * 9) / 5 + 32;

    return (
      <span className="Temperature">
        <span className="TempRound">{Math.round(farenheit)}</span>
        <span className="unit">
          <a href="/" onClick={convertToCelcius}>
            °C
          </a>
          |°F
        </span>
      </span>
    );
  }
}