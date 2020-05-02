import React, { useState } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

const PriceList = () => {
  const handleSubmit = async (e) => {
    const price = e.target.value;
    // fetch("/send-price-api", {
    //   body: JSON.stringify(price),
    //   mode: "post",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    // })
    setTimeout(() => {
      alert("Successful");
    }, 1000);
  };

  return (
    <div className="main">
      <div className="card">
        <h2>Bronze</h2>
        <p>Price $2000</p>
        <button type="button" value="2000" onClick={handleSubmit}>
          Buy
        </button>
      </div>
      <div className="card">
        <h2>Silver</h2>
        <p>Price $3000</p>
        <button type="button" value="3000" onClick={handleSubmit}>
          Buy
        </button>
      </div>
      <div className="card">
        <h2>Gold</h2>
        <p> Price $4000</p>
        <button type="button" value="4000" onClick={handleSubmit}>
          Buy
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(
  <PriceList />,

  document.getElementById("root")
);

serviceWorker.unregister();
