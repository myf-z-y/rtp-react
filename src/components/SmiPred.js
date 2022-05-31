export default function SmiPred(props) {
  return (
    <form action="" method="get" className="form-example">
      <div className="form-example">
        <label htmlFor="name">Enter your SMILES: </label>
        <input type="text" name="name" id="name" required />
        <button type="submit">predict</button>
      </div>
      <div className="pred-result">
        <p>result: </p>
        <p>prob: </p>
      </div>
    </form>
  );
}
