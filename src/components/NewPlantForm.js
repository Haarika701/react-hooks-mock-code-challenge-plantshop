import React, { useState } from "react";

function NewPlantForm({setPlantsArray}) {
const initialValue = {
  name:"",
  image:"",
  price:"",
}
  const [formData,setFormData] = useState(initialValue)

  const  handleForm = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    setFormData((currentPlant) => {return {...currentPlant,[e.target.name] : e.target.value}
  });
  
  }
  function handleSubmit(e) {
    e.preventDefault()
    console.log("submitted") 
 

 fetch("http://localhost:6001/plants",{
method:"POST",
headers :{
  "Content-Type" : "application/json"
},
body : JSON.stringify(formData)
}).then(resp => resp.json())
  .then((data) => {console.log(data);
   setFormData(initialValue)
   setPlantsArray((currentPlants) => [data,...currentPlants])
   })
  }
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
