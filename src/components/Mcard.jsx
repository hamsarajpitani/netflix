import React from "react";
import img from "../images/portrait.jpg";

const Mcard = () => {
  return (
    <>
      <div className="col-md-2 mv-card">
        <div class="card text-white bg-dark">
          <img src={img} class="card-img-top" alt="..." />
          
        </div>
      </div>
    </>
  );
};

export default Mcard;
