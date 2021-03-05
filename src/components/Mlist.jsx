import React from "react";
import Mcard from "./Mcard";

const Mlist = (props) => {
  return (
    <>
      <section className="mlist">
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 mx-auto">
              <div className="row mt-5">
                <div className="col-11">
                  <div id="list">
                    <div className="list__text">
                      <h1 className="list__text__title">
                        featured
                        <br />
                        <span>{props.heading}</span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 mx-auto">
                  <div className="movies">
                    <Mcard />
                    <Mcard />
                    <Mcard />
                    <Mcard />
                    <Mcard />
                    <Mcard />
                    <Mcard />
                    <Mcard />
                    <Mcard />
                    <Mcard />
                    <Mcard />
                    <Mcard />
                    <Mcard />
                    <Mcard />
                    <Mcard />
                     <Mcard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mlist;
