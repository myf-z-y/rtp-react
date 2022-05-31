import { useState } from "react";

export default function SmiPred(props) {
  const [newName,setNewName]=useState("");
  const [res,setRes]=useState("");

  function handleChange(e) {
    setNewName(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    try {
      // after this line, our function will wait for the `fetch()` call to be settled
      // the `fetch()` call will either return a Response or throw an error
      
      const response = await fetch('/predict?smi='+newName);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      // after this line, our function will wait for the `response.json()` call to be settled
      // the `response.json()` call will either return the JSON object or throw an error
      const json = await response.json();
      setRes(json['req']);
      console.log(json);
    }
    catch(error) {
      console.error(`Could not get products: ${error}`);
    }
  }


return (
  <form onSubmit={handleSubmit} className="form-example">
    <div className="form-example">
      <label htmlFor="smi">Enter your SMILES: </label>
      <input type="text" value={newName} onChange={handleChange} name="smi" id="smi" required />
      <button type="submit">predict</button>
    </div>
    <div className="pred-result">
      <p>result: {res}</p>
      <p>prob: </p>
    </div>
  </form>
);
}
