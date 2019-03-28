defineGameListeners = function(){
    window.addEventListener('resize', resizeCanvas, false);
     // Mouse event listeners


    canvas.addEventListener('mousemove', function (event) {
      var mousePos = getMousePos(event);
      sizeLINKED = 200 * (10/Math.sqrt(distance(mousePos,{x:canvas.width/8,y:canvas.height*5/8})));
      if (sizeLINKED > 200) sizeLINKED = 200;
      else if (sizeLINKED < 100) sizeLINKED = 100;

      sizeGIT = 200 * (10/Math.sqrt(distance(mousePos,{x:canvas.width/4,y:canvas.height*5/8})));
      if (sizeGIT > 200) sizeGIT = 200;
      else if (sizeGIT < 100) sizeGIT = 100;

      sizeWWW = 200 * (10/Math.sqrt(distance(mousePos,{x:canvas.width*3/8,y:canvas.height*5/8})));
      if (sizeWWW > 200) sizeWWW = 200;
      else if (sizeWWW < 100) sizeWWW = 100;
    }, false);

    canvas.addEventListener('mousedown', function (event) {
      if (sizeLINKED === 200){
          window.location.href = "https://www.linkedin.com/in/julien-boivert-39517413a/";
      } else if (sizeGIT === 200){
          window.location.href = "https://github.com/BoivertJulien";
      } else if (sizeWWW === 200){
          window.location.href = "http://www.boivert.ovh";
      }
    }, false);
}

function getMousePos(evt) {
   // necessary to take into account CSS boudaries
   var rect = canvas.getBoundingClientRect();
   return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
   };
 }

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    etoiles=[];
}

function distance(xy,xybis){
  var dx = (xy.x - xybis.x);
  var dy = (xy.y - xybis.y);
  return Math.sqrt(dx*dx + dy*dy);
}