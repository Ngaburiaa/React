import React from "react";

function ButtonComponent({ color, setColor, setImgIndex }) {
  function colorChange(event) {
    setColor(event.target.name);
    if (color === "red") {
      setImgIndex(1);
    } else if (color === "black") {
      setImgIndex(0);
    } else {
      setImgIndex(2);
    }
  }

      const background = {
        backgroundColor: color,
        color: "white",
      };

  return (

    <div className="colordesign">
      <button className="colors" style={background} onClick={colorChange} name={color}></button>
    </div>
  );
}

export default ButtonComponent;
