defineGameListeners = function(){
    window.addEventListener('resize', resizeCanvas, false);
     // Mouse event listeners

    canvas.addEventListener('mousemove', function (event) {
      var mousePos = getMousePos(event);
      sizeLINKED = iconMaxSize * (10 / Math.sqrt(distance(mousePos,{x:widthDivBy8,y:heightDivBy4 * 3})));
      if (sizeLINKED > iconMaxSize) sizeLINKED = iconMaxSize;
      else if (sizeLINKED < iconMinSize) sizeLINKED = iconMinSize;

      sizeGIT = iconMaxSize * (10 / Math.sqrt(distance(mousePos,{x:widthDivBy4,y:heightDivBy4 * 3})));
      if (sizeGIT > iconMaxSize) sizeGIT = iconMaxSize;
      else if (sizeGIT < iconMinSize) sizeGIT = iconMinSize;

      sizeWWW = iconMaxSize * (10 / Math.sqrt(distance(mousePos,{x:widthDivBy8 * 3,y:heightDivBy4 * 3})));
      if (sizeWWW > iconMaxSize) sizeWWW = iconMaxSize;
      else if (sizeWWW < iconMinSize) sizeWWW = iconMinSize;

      sizeGITLAB = iconMaxSize * (10 / Math.sqrt(distance(mousePos,{x:widthDivBy2,y:heightDivBy4 * 3})));
      if (sizeGITLAB > iconMaxSize) sizeGITLAB = iconMaxSize;
      else if (sizeGITLAB < iconMinSize) sizeGITLAB = iconMinSize;

      sizeTWITTER = iconMaxSize * (10 / Math.sqrt(distance(mousePos,{x:widthDivBy8*5,y:heightDivBy4 * 3})));
      if (sizeTWITTER > iconMaxSize) sizeTWITTER = iconMaxSize;
      else if (sizeTWITTER < iconMinSize) sizeTWITTER = iconMinSize;

      sizeINSTAGRAM = iconMaxSize * (10 / Math.sqrt(distance(mousePos,{x:widthDivBy4 * 3,y:heightDivBy4 * 3})));
      if (sizeINSTAGRAM > iconMaxSize) sizeINSTAGRAM = iconMaxSize;
      else if (sizeINSTAGRAM < iconMinSize) sizeINSTAGRAM = iconMinSize;


    }, false);

    canvas.addEventListener('mousedown', function (event) {
      if (sizeLINKED === iconMaxSize){
          window.location.href = urlLinkedIn;
      } else if (sizeGIT === iconMaxSize){
          window.location.href = urlGithub;
      } else if (sizeWWW === iconMaxSize){
          window.location.href = urlWWW;
      } else if (sizeGITLAB === iconMaxSize){
          window.location.href = urlGitlab;
      } else if (sizeTWITTER === iconMaxSize){
          window.location.href = urlTwitter;
      } else if (sizeINSTAGRAM === iconMaxSize){
          window.location.href = urlInstagram;
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

  // variable pour eviter calculs repetitifs
  widthDivBy2 = canvas.width / 2;
  widthDivBy4 = canvas.width / 4;
  widthDivBy8 = canvas.width / 8;
  heightDivBy2 = canvas.height / 2;
  heightDivBy4 = canvas.height / 4;
  heightDivBy8 = canvas.height / 8;

  // Suppression des etoiles qui n'auront desormais plus la bonne direction
  etoiles=[];

  // (Re)Definition de la couleur d'arrière plan (depend hauteur de l'ecran)
  gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, 'rgba(0,0,0,0.4)');
  gradient.addColorStop(0.40, 'rgba(0,0,255,0.4)');
  gradient.addColorStop(0.49, 'rgba(173,216,230,0.4)');
  gradient.addColorStop(0.51, 'rgba(255,192,203,0.4)');
  gradient.addColorStop(0.8, 'rgba(255,0,255,0.4)');
}

function distance(xy,xybis){
  var dx = (xy.x - xybis.x);
  var dy = (xy.y - xybis.y);
  return Math.sqrt(dx*dx + dy*dy);
}