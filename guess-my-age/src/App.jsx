import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAge } from "./actions";
import "./App.css"

function App() {
  const dispatch = useDispatch();
  const { age, loading, error } = useSelector((state) => state.age || {});
  const [name, setName] = useState("");
  const [warning, setWarning] = useState("");

  const handleFetchAge = async () => {
    if (name.trim() === "") {
      setWarning("Please enter your name.");
      return;
    }

    if (typeof name !== "string" || /^\d+$/.test(name)) {
      setWarning("Invalid name format. Please enter a valid name.");
      return;
    }

    setWarning("");

    await dispatch(fetchAge(name));
  };

  return (
    <div className="content">
      <div className="header">
        <img className="headerimg" src="./headeraltt.png" alt="" />
        <hr />
        <h1 className="header-title">Guess My Age</h1>
      </div>
      <div className="main">
        <div className="name-input">
          <label htmlFor="nameInput">My Name Is:</label>
          <input
            type="text"
            id="nameInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-area"
          />
          <button className="btn" onClick={handleFetchAge}>Let's do this!</button>
        </div>
        
        <p className="yas">
          My Age:
          {age !== null && age !== undefined && !loading && !error && (
            <span className="yas-tahmini"> {age}</span>
          )}
        </p>
        {warning && <p style={{ color: "#ffb5b5" }}>{warning}</p>}
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
      </div>
      <hr className="cizgi" />

      <div className="footer">
        <img className="footerimg" src="./footer.png" alt="" />
        <img className="footerimg" src="./footer2.png" alt="" />
        <img className="footerimg" src="./headeralt.png" alt="" />
        
      </div>
    </div>
  );
}

export default App;
