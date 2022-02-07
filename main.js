const drawCanvas = document.getElementById("draw_canvas");
const ctx = drawCanvas.getContext("2d");
ctx.moveTo(0,0);
window.onload=function(){
    let mouseStatus = false;
    let stroke = [];

    drawCanvas.addEventListener("mousemove", function(e){
        if(mouseStatus) {
            console.log("mousemove");

            document.getElementById("txtX").value = e.pageX;
            document.getElementById("txtY").value = e.pageY;

            stroke.push([e.pageX, e.pageY]);
            // ctx.fillRect(e.pageX - 10, e.pageY - 10, 3, 3);
            ctx.lineWidth = 3;
            ctx.moveTo(stroke[stroke.length-2][0]-10, stroke[stroke.length-2][1]-10);
            ctx.lineTo(stroke[stroke.length-1][0]-10, stroke[stroke.length-1][1]-10);
            ctx.stroke();
        }
    });

    drawCanvas.addEventListener("mousedown", function (e) {
        console.log("mousedown");
        stroke.push([e.pageX, e.pageY]);
        mouseStatus = true;
    });

    drawCanvas.addEventListener("mouseup", function (e) {
       console.log("mouseup");
       mouseStatus = false;
       console.log(stroke);

       console.log(JSON.stringify(stroke));
    });
}