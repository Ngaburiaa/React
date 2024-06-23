import React from "react";

export default function ItemComponent({ item }) {
  return (
    <div>
      <p>Title: {item.title}</p>
      <p>Description: {item.description}</p>
      <p>collection: {item.collection}</p>
      <p>AvailableColor: {item.availableColors}</p>
      <p>Price: {item.price}</p>
      <p>Category: {item.Categories}</p>
      <p>ProductId: {item.productID}</p>
      
    </div>
  );
}
