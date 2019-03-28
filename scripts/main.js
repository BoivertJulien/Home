window.onload = init;

let audioCtx = window.AudioContext || window.webkitAudioContext;
let canvas, ctx, audioContext, player;
let etoiles = [];
let analyser;
let dataArray, bufferLength;
let gradient;
let ME, GIT, WWW, LINKED;
let sizeGIT=150, sizeWWW=150, sizeLINKED=150;

let loaded = 0;
// main.js

function init() {
    canvas = document.querySelector("#myCanvas");
    player = new Audio('songs/walkit.mp3');
    ME = new Image();
    ME.addEventListener('load', function(){
        loaded +=1;
    });
    ME.src = "songs/profil.png";

    GIT = new Image();
    GIT.addEventListener('load', function(){
        loaded +=1;
    });
    GIT.src = "songs/github.png";

    WWW = new Image();
    WWW.addEventListener('load', function(){
        loaded +=1;
    });
    WWW.src = "songs/www.png";

    LINKED = new Image();
    LINKED.addEventListener('load', function(){
        loaded +=1;
    });
    LINKED.src = "songs/linkedin.png";

    ctx = canvas.getContext("2d");
    audioContext = new audioCtx();
    buildAudioGraph();
    defineGameListeners();

    resizeCanvas();

    player.play();
    requestAnimationFrame(animation);
}

function animation(time) {
    clearCanvas();

    dessineEtDeplaceLesEtoiles();
    drawVolumeMeter();
    visualize();
    CV();

    var rand = Math.random();
    if (rand > 0.75){
        rect1 = new Etoile();
        etoiles.push(rect1);
    }
    
    requestAnimationFrame(animation);

}

function dessineEtDeplaceLesEtoiles() {
    etoiles.forEach((el, index, object) => {
        el.draw(ctx);
        el.move();
        if ((Math.abs(el.x - (canvas.width*3 / 4)) < 20 && Math.abs(el.y - (canvas.height / 4)) < 20) || (el.x > canvas.width || el.x < 0)) {
            object.splice(index, 1);
        }
    });
}
