import React from "react";
import "./Bg.css";
const Bg = () => {
  return (
    <div className="bg-cont">
      <div className="bg-row">
        <span style={{'--i':3,'--x':9}}></span>
        <span style={{'--i':5,'--x':12}}></span>
        <span style={{'--i':6,'--x':6}}></span>
        <span style={{'--i':8,'--x':18}}></span>
        <span style={{'--i':4,'--x':14}}></span>
        <span style={{'--i':5,'--x':8}}></span>
        <span style={{'--i':7,'--x':11}}></span>
        <span style={{'--i':5.4,'--x':7}}></span>
      </div>
    </div>
  );
};

export default Bg;
