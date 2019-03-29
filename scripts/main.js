window.onload = init;

let audioCtx = window.AudioContext || window.webkitAudioContext;
let canvas, ctx, gradient, audioContext, player;
let dataArray, analyser, bufferLength;
let etoiles = [];

let ME, GIT, WWW, LINKED, GITLAB,TWITTER, INSTAGRAM;
let sizeGIT=150, sizeWWW=150, sizeLINKED=150;
let sizeGITLAB=150, sizeTWITTER=150, sizeINSTAGRAM=150;

let iconMaxSize = 200;
let iconMinSize = 100;

let loaded = 0;
let IMG_TO_LOAD = 7;

let widthDivBy2, widthDivBy4, widthDivBy8;
let heightDivBy2, heightDivBy4, heightDivBy8;

function init() {
    canvas = document.querySelector("#myCanvas");
    player = new Audio('ressources/walkit.mp3');
    ME = new Image();
    GIT = new Image();
    WWW = new Image();
    LINKED = new Image();
    GITLAB = new Image();
    TWITTER = new Image();
    INSTAGRAM = new Image();

    ME.addEventListener('load', function(){ loaded +=1; });
    GIT.addEventListener('load', function(){ loaded +=1; });
    WWW.addEventListener('load', function(){ loaded +=1; });
    LINKED.addEventListener('load', function(){ loaded +=1; });
    GITLAB.addEventListener('load', function(){ loaded +=1; });
    TWITTER.addEventListener('load', function(){ loaded +=1; });
    INSTAGRAM.addEventListener('load', function(){ loaded +=1; });

    ME.src = "ressources/profil.png";
    GIT.src = "ressources/github.png";
    WWW.src = "ressources/www.png";
    LINKED.src = "ressources/linkedin.png";
    GITLAB.src = "ressources/gitlab.png";
    TWITTER.src = "ressources/twitter.png";
    INSTAGRAM.src = "ressources/instagram.png";

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
    if (rand > 0.70){ etoiles.push(new Etoile()); }
    
    requestAnimationFrame(animation);
}

