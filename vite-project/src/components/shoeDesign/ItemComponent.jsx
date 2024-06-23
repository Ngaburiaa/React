import React, { useState } from "react";
import ButtonComponent from "./ButtonComponent";

function ItemComponent({ list }) {
  const [color, setColor] = useState("black");
  const [imgIndex, setImgIndex] = useState(0);

  const background = {
    backgroundColor: color,
    color :"white"
    
  };

  const titleColor = {
    color: color,
  };

  const priceColor = {
    color: color,
        
      
  };

  const detailsBackGround = {
    backgroundColor: "white",
  };

  const r = {
    backgroundColor: color,
    padding: "2rem",
  };

  return (
    <div  className="divContainer" style={r}>
      <div className="image" style={background}>
        <h1 >NIKE</h1>
        <img src={list.imageUrl[imgIndex]} />
      </div>
      <div style={detailsBackGround}>
        <h1 style={titleColor}>{list.title}</h1>
        <p>{list.collection}</p>
        <p>{list.description}</p>

        <div className="buttons">      
            <p >Availabe Colours: </p>

        <ButtonComponent
          setImgIndex={setImgIndex}
          setColor={setColor}
          color={list.availableColors[1]}
        />
        <ButtonComponent
          setImgIndex={setImgIndex}
          setColor={setColor}
          color={list.availableColors[0]}
        />
        <ButtonComponent
          setImgIndex={setImgIndex}
          setColor={setColor}
          color={list.availableColors[2]}
        />
</div>
<div className="submits">         <p style={priceColor}>Rs {list.price}</p>

        <button style={background}>Buy now</button>
        </div>
        </div>
    </div>
  );
}

export default ItemComponent;
