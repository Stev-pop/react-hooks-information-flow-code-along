import React from "react";
// import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor }) {
  return <div onClick = {onChangeColor} className="child" style={{ backgroundColor: "#FFF" }} />;
}

export default Child;
