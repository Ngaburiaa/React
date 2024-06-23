import React from "react";
import ItemComponent from "./ItemComponent";

function ListComponent({ list }) {
  return (
    <div>
      {list.map((items) => (
        <ItemComponent key={items.productID} item={items} />
      ))}
    
    </div>
  );
}

export default ListComponent;
