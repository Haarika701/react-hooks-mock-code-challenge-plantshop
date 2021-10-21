import React from "react";
import PlantCard from "./PlantCard";

function PlantList({PlantsArray}) {
  const displayPlants = PlantsArray.map(plant => <PlantCard key = {plant.id}  plant = {plant}/>)
  return (
    <ul className="cards">{displayPlants}</ul>
  );
}

export default PlantList;
