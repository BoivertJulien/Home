function clearCanvas() {
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    // create a vertical gradient of the height of the canvas
    gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, 'rgba(0,0,0,0.4)');
    gradient.addColorStop(0.40, 'rgba(0,0,255,0.4)');
    gradient.addColorStop(0.49, 'rgba(173,216,230,0.4)');
    gradient.addColorStop(0.51, 'rgba(255,192,203,0.4)');
    gradient.addColorStop(0.8, 'rgba(255,0,255,0.4)');

    ctx.save();
    ctx.fillStyle = gradient;

    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(0,canvas.height);
    ctx.lineTo(canvas.width,canvas.height);
    ctx.lineTo(canvas.width,0);
    ctx.fill();

    ctx.restore();
}

function CV(){
    ctx.save();
    ctx.fillStyle = 'rgba(250,250,250,0.1)';
    ctx.fillRect (50, canvas.height/4, canvas.width/2 -100, canvas.height*3/4 -100);

    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.fillRect (canvas.width/4-120,canvas.height/4-120,240,240);

    if (loaded === 4){
        ctx.drawImage(ME,canvas.width/4-100,canvas.height/4-100,200,200);
        ctx.drawImage(LINKED,canvas.width/8-sizeLINKED/2,canvas.height*5/8-sizeLINKED/2,sizeLINKED,sizeLINKED);
        ctx.drawImage(GIT,canvas.width/4-sizeGIT/2,canvas.height*5/8-sizeGIT/2,sizeGIT,sizeGIT);
        ctx.drawImage(WWW,canvas.width/8*3-sizeWWW/2,canvas.height*5/8-sizeWWW/2,sizeWWW,sizeWWW);
    }
    ctx.restore();
}