import React from "react";
import img from "../images/poster2.jpg";
const Intro = () => {
  return (
    <div>
      <div className="intro">
        <div className="intro__img">
          <img src={img} className="img-fluid" alt="" />
        </div>
        <div className="intro__text">
          <h1 className="intro__text__title">
           
            <span> Welcome to hams </span>
            <br />
            theater
          </h1>

          <p className="intro__text__para">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.qui. Minima
            exc!
          </p>
          <button className="btn btn-danger">
            <i class="bi bi-film"></i> showtimes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
