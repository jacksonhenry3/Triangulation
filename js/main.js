var canvas  = $("#triangleCanvas")
    context = canvas[0].getContext("2d"),
    w       = canvas.width(),
    h       = canvas.height(),
    nw      = 50,
    nh      = 50,
    dx      = (w+50)/nw,
    dy      = (h+50)/nh;

canvas[0].width = w
canvas[0].height =h


pnts = []
for (var i = 0; i <= nw-1; i++) {
    pnts.push([]);
    for (var j = 0; j <= nh-1; j++) {
        rx = Math.random()*15
        ry = Math.random()*15
        // rx=0
        // ry=0
        pnts[i].push([dx*i-25+rx,dy*j+ry-25])
        // pnt = 
        // draw4Lines(pnt)
    }
}

for (var i = pnts.length - 2; i >= 1; i--) {
    row = pnts[i]
    for (var j = row.length - 2; j >= 1; j--) {
        pnt = row[j]
        pnt2 = pnts[i-1][j+1]
        pnt3 = pnts[i-1][j-1]
        draw4Lines(pnt,pnt2)
        draw4Lines(pnt,pnt3)
    }
}

// console.log(pnts)
function draw4Lines(pnt,pnt2) {
    // context.fillRect(pnts[i][j][0],pnts[i][j][1],2,2);
    // context.fillRect(pnts[i-1][j][0],pnts[i][j+1][1],2,2);
    context.beginPath();

    context.moveTo(pnt[0],pnt[1]);
    context.lineTo(pnt2[0],pnt2[1]);
    context.stroke();
    
    // context.moveTo(pnt[0],pnt[1]);
    // context.lineTo(pnts[i-1][j][0],pnts[i][j-1][1]);
    // context.stroke();
    
    // context.moveTo(pnt[0],pnt[1]);
    // context.lineTo(pnt[0],pnt[1]+dy);
    // context.stroke();
    
    // context.moveTo(pnt[0],pnt[1]);
    // context.lineTo(pnt[0],pnt[1]-dy);
    // context.stroke();


};