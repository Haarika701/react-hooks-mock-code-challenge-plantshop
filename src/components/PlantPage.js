import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const API = " http://localhost:6001/plants"

  const [PlantsArray,setPlantsArray] = useState([])
  const [search,setSearch] = useState('')

  useEffect(() => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => setPlantsArray(data))
  },[])

 
  const searchPlants = PlantsArray.filter((plant) => plant.name.toLowerCase().includes(search.toLowerCase()) )
  console.log(searchPlants)
  return (
    <main>
      <NewPlantForm setPlantsArray={setPlantsArray}/>
      <Search search = {search} setSearch = {setSearch}  />
      <PlantList PlantsArray ={searchPlants}/>
    </main>
  );
}

export default PlantPage;
