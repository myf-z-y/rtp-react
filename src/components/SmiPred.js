import { useState } from "react";
import { nanoid } from "nanoid";
import Button from '@mui/material/Button';
import StatusInfo from "./StatusInfo";

export default function SmiPred(props) {
  const [newName, setNewName] = useState("");
  const [res, setRes] = useState("");
  const [prob, setProb] = useState("");
  const [stat, setStat] = useState("");
  const [inputSmi, setInputSmi] = useState("");
  const [imgSrc, setImgSrc] = useState("");

  function handleChange(e) {
    setNewName(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const genNano = nanoid();
      // after this line, our function will wait for the `fetch()` call to be settled
      // the `fetch()` call will either return a Response or throw an error
      //const response = await fetch('/predict?smi=${newName}`);
      setStat("loading");
      const responsePred = await fetch("/predict", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ smi: newName }),
      });

      const responseImg = await fetch("/smiVis", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ smi: newName, randId: genNano }),
      });

      const responseClean = await fetch("/cleanImg", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ smi: newName, randId: genNano }),
      });
      /*
      if (!(responsePred.ok && responseImg.ok && responseClean.ok)) {
        throw new Error(`HTTP error: ${responsePred.status}`);
      }
      */
      // after this line, our function will wait for the `response.json()` call to be settled
      // the `response.json()` call will either return the JSON object or throw an error
      const json = await responsePred.json();

      setRes(json["res"]);
      if (json["prob"] === -1) {
        setProb("");
      } else {
        setProb(json["prob"]);
      }
      setStat("done");
      setInputSmi(newName);
      //console.log(json);

      const blob = await responseImg.blob();
      const objectURL = URL.createObjectURL(blob);
      setImgSrc(objectURL);
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
        <Button variant="contained" type="submit" size="small">Predict</Button>
      </div>
      <div className="pred-result">
      <p>status: </p> 
<div className="status">
      <StatusInfo stat={stat}></StatusInfo>
        </div>
        <p>input: </p>
        <div className="inputSmi">{inputSmi}</div>
        <p>result: </p>
        <div className="result">{res}</div>
        <p>prob: </p>
        <div className="prob">{prob}</div>
        <p>vis:</p>
        <div className="smiVis">
          <img src={imgSrc} alt=""></img>
        </div>
      </div>
    </form>
  );
}
