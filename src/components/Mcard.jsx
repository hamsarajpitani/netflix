import React from "react";
import img from "../images/poster3.jpg";

const Mcard = () => {
  return (
    <>
      <div className="col-md-2">
        <div class="card text-white bg-dark">
          <img src={img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mcard;
