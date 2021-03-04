import React from "react";
import img from "../images/poster3.jpg";
const Mlist = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="row">
              <div className="col-10 mx-auto">
                <div id="list">
                  <div className="list__text">
                    <h1 className="list__text__title">
                      featured
                      <br />
                      <span>
                        <span className="now">Now</span> Showing
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mx-5 mt-4">
              <div className="col-md-3 mx-auto ">
                <div className="card mx-auto" style={{ width: "15rem" }}>
                  <img src={img} className="card-img-top img-fluid" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-outline-danger">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-3 mx-auto ">
                <div className="card mx-auto" style={{ width: "15rem" }}>
                  <img src={img} className="card-img-top img-fluid" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-outline-danger">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mx-auto ">
                <div className="card mx-auto" style={{ width: "15rem" }}>
                  <img src={img} className="card-img-top img-fluid" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-outline-danger">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mx-auto ">
                <div className="card mx-auto" style={{ width: "15rem" }}>
                  <img src={img} className="card-img-top img-fluid" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-outline-danger">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mx-auto ">
                <div className="card mx-auto" style={{ width: "15rem" }}>
                  <img src={img} className="card-img-top img-fluid" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-outline-danger">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mx-auto ">
                <div className="card mx-auto" style={{ width: "15rem" }}>
                  <img src={img} className="card-img-top img-fluid" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-outline-danger">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mlist;
