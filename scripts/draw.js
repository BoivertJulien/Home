function clearCanvas() {
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

    // Grand panneau (Liens réseaux sociaux)
    ctx.fillStyle = 'rgba(255,255,255,0.1)';
    ctx.fillRect (0, heightDivBy8*5, canvas.width, heightDivBy4);

    // Petit panneau (Photo profil)
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.fillRect (widthDivBy4-120,heightDivBy4-120,240,240);
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    ctx.fillRect (widthDivBy4+120,heightDivBy4-100,270,80);
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    ctx.fillRect (widthDivBy4+120,heightDivBy4+20,540,80);

    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    ctx.font = "40px Arial";
    ctx.fillText("NOM Prénom", widthDivBy4+130, heightDivBy4-40); 
    ctx.font = "40px Arial";
    ctx.fillText("Description", widthDivBy4+130, heightDivBy4+80); 

    if (loaded === IMG_TO_LOAD){
        ctx.drawImage(ME, widthDivBy4-100, heightDivBy4-100, 200, 200);
        ctx.drawImage(LINKED, widthDivBy8-sizeLINKED/2, heightDivBy4*3-sizeLINKED/2, sizeLINKED, sizeLINKED);
        ctx.drawImage(GIT, widthDivBy4-sizeGIT/2, heightDivBy4*3-sizeGIT/2, sizeGIT, sizeGIT);
        ctx.drawImage(WWW, widthDivBy8*3-sizeWWW/2, heightDivBy4*3-sizeWWW/2, sizeWWW, sizeWWW);
        ctx.drawImage(GITLAB, widthDivBy2-sizeGITLAB/2, heightDivBy4*3-sizeGITLAB/2, sizeGITLAB, sizeGITLAB);
        ctx.drawImage(TWITTER, widthDivBy8*5-sizeTWITTER/2, heightDivBy4*3-sizeTWITTER/2, sizeTWITTER, sizeTWITTER);
        ctx.drawImage(INSTAGRAM, widthDivBy4*3-sizeINSTAGRAM/2, heightDivBy4*3-sizeINSTAGRAM/2, sizeINSTAGRAM, sizeINSTAGRAM);
    }
    ctx.restore();
}

function dessineEtDeplaceLesEtoiles() {
    etoiles.forEach((star, index, object) => {
        star.draw(ctx);
        star.move();
        if ((Math.abs(star.x - (widthDivBy4 * 3)) < 20 && Math.abs(star.y - heightDivBy4) < 20) || (star.x > canvas.width || star.x < 0)) {
            object.splice(index, 1);
        }
    });
}
