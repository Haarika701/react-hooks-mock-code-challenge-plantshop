import React, { useState } from "react";

function NewPlantForm() {

  const [formData,setFormData] = useState({
    name:"",
    image:"",
    price:" ",
  })

  const  handleForm = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    setFormData({...formData,[e.target.name] : e.target.value})
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submitted") }
//   const newPlant = {
//     name : formData.name,
//     image : formData.image,
//     price : formData.price,
//   }
//   //eslint-disable-next-line
// fetch("http://localhost:6001/plants",{
// method: "POST",
// headers :{
//   "Content-Type" : "application/json"
// },
// body : JSON.stringify(newPlant)
// }) .then(resp => resp.json())
//    .then ((data) => onAddPlant(currentPlants => [data, ...currentPlants]));

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit = {handleSubmit}> 
        <input type="text" name="name" placeholder="Plant name" value = {formData.name} onChange = {handleForm}/>
        <input type="text" name="image" placeholder="Image URL" value = {formData.image} onChange = {handleForm}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value = {formData.price}  onChange = {handleForm} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
