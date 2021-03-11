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
