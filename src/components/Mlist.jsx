import React from "react";
import Mcard from "./Mcard";
import Mheading from "./Mheading";


const Mlist = () => {

 let fun = null;
  const handleright= ()=> {
    var container = document.getElementById('container');
    sideScroll(container,'right',25,100,10);
};

 const handleleft = ()=> {
    var container = document.getElementById('container');
    sideScroll(container,'left',25,100,10);
};

function handleNext() {
 fun = setInterval(() => {
    handleright();
  }, 250);
}


function handlePrev() {

  fun = setInterval(() => {
    handleleft();
  }, 250);
}


function handleOut(){
  clearInterval(fun);
}

function sideScroll(element,direction,speed,distance,step){
  let scrollAmount = 0;
  var slideTimer = setInterval(function(){
      if(direction === 'left'){
          element.scrollLeft -= step;
      } else {
          element.scrollLeft += step;
      }
      scrollAmount += step;
      if(scrollAmount >= distance){
          window.clearInterval(slideTimer);
      }
  }, speed);
  
}


  return (
    <>
     <section className="mlist">
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 mx-auto">
              <Mheading heading="now showing" />

              <div className="row">
                <div className="col-12 mx-auto">
                  <div className="movies" id="container">
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
                    <Mcard />
                    <Mcard />
                    <Mcard />
                    <Mcard />
                    <Mcard />
                    <Mcard />
                  </div>
                </div>
              </div>
              <button id="slide-btn slide" className="btn btn-outline-danger m-2 text-white fw-bolder  slide-btn" onMouseOver={handleNext} onMouseOut={handleOut}> Next</button> 
              <button id="slide-btn slideBack" className="btn btn-outline-danger m-2 text-white fw-bolder slide-btn" onMouseOver={handlePrev} onMouseOut={handleOut}> Prev</button> 

              <Mheading heading="most popular" />

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
                  </div>
                </div>
              </div>
              

              <Mheading heading="hollywood shows" />

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
                  </div>
                </div>
              </div>

              <Mheading heading="bollywood shows" />

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
