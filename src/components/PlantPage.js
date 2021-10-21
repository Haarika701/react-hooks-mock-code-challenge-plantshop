import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const API = " http://localhost:6001/plants"

  const [PlantsArray,setPlantsArray] = useState([])
  const [search,setSearch] = useState("")

  useEffect(() => {
    fetch(API)
    .then(resp => resp.json())
    .then(data => setPlantsArray(data))
  },[])

 const  handleSearch = (e) => {
   setSearch(e.target.value)

 }
 
  const searchPlants = PlantsArray.filter(plant => plant.name.includes(search))
  return (
    <main>
      <NewPlantForm />
      <Search search = {search} handleSearch={handleSearch} />
      <PlantList PlantsArray ={PlantsArray} plant={searchPlants}/>
    </main>
  );
}

export default PlantPage;
