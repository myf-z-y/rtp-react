import { useState } from "react";

export default function SmiPred(props) {
  const [newName, setNewName] = useState("");
  const [res, setRes] = useState("");
  const [prob, setProb] = useState("");
  const [stat, setStat] = useState("");

  function handleChange(e) {
    setNewName(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      // after this line, our function will wait for the `fetch()` call to be settled
      // the `fetch()` call will either return a Response or throw an error
      //const response = await fetch('/predict?smi=${newName}`);
      const response = await fetch("/predict", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ smi: newName }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      // after this line, our function will wait for the `response.json()` call to be settled
      // the `response.json()` call will either return the JSON object or throw an error
      setStat("computing...");
      const json = await response.json();
      
      setRes(json["res"]);
      if (json["prob"] === -1) {
        setProb("");
      } else {
        setProb(json["prob"]);
      }
      setStat("done!")
      //console.log(json);
    } catch (error) {
      console.error(`Could not get products: ${error}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="form-example">
      <div className="form-example">
        <label htmlFor="smi">Enter your SMILES: </label>
        <input
          type="text"
          value={newName}
          onChange={handleChange}
          name="smi"
          id="smi"
          required
        />
        <button type="submit">predict</button>
        <span className="status">Status: {stat}</span>
      </div>
      <div className="pred-result">
        <p>result: {res}</p>
        <p>prob: {prob}</p>
      </div>
    </form>
  );
}
