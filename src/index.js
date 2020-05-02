import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

const PriceList = () => {
  /**
   * @function submits the value from the input
   * @param {*} e
   */

  const handleSubmit = async (e) => {
    const price = e.target.value;
    // THE CODE ON COMMENT SHOWS HOW TO MAKE THE REQUEST TO A GIVEN API
    console.log(price);
    // try {
    //   //ANY API TO SEND THE DATA
    //   // OR DISPATCH AN ACTION TO SEND THE DATA
    //   const response = await fetch(
    //     "/mock-api",
    //     {
    //       body: JSON.stringify(price),
    //       mode: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   const sucessData = await response.json();
    //   //  Do any thing with the data returned
    //   console.log(sucessData);
    // } catch (error) {
    //   console.log(error);
    //   // do anything with the error
    // }

    setTimeout(() => {
      alert("Successful");
    }, 2000);
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
