import React from 'react'

const Mheading = (props) => {
    return (
        <>
          <div className="row my-5">
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
        </>
    )
}

export default Mheading
