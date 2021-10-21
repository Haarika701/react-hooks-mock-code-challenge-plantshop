import React, { useState } from "react";

function PlantCard({plant :{image,name,price}}) {

  const [soldOut,setSoldOut ] = useState(true)

  function handleClick (){
    setSoldOut((soldOut) => !soldOut);
  }
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {soldOut ? (
        <button onClick = {handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick = {handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
