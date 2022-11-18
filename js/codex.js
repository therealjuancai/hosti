document.addEventListener("keyup", e=>{
    if(e.target.matches("#buscador")){
        document.querySelectorAll(".card").forEach(fruta=>{
            fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?fruta.classList.remove("filtro")
                :fruta.classList.add("filtro")
        })
    }
    console.log(e.target.value)
})
function rect(){
    document.getElementById("rect").classList.remove("filtro")
    document.getElementById("cir").classList.add("filtro")
    document.getElementById("Radio").value="";
}
function cir(){
    document.getElementById("cir").classList.remove("filtro")
    document.getElementById("rect").classList.add("filtro")
    document.getElementById("Largo").value="";
    document.getElementById("Ancho").value="";
}
function area(){
    var Laargo=document.getElementById("Largo").value;
    var aancho=document.getElementById("Ancho").value;
    var raadio=document.getElementById("Radio").value;
    if (Laargo!=""){
        var area=Laargo*aancho
    } else {
        var area=raadio*raadio*3.1416
    }
    return area
}
function calcular(mat){
    var diistancia=document.getElementById("Distancia").value;
    var ep = 625000/(22468879468420441*3.1416)
    var cap = (area()*mat*ep)/diistancia
    document.getElementById("capacitancia").innerHTML = ("Capacitancia = "+ cap +" F")
    document.getElementById("permitividad").innerHTML = ("Permitividad del Material(k) = "+ mat)
    document.getElementById("separacion").innerHTML = ("Separación(d) = "+ diistancia +" m")
    document.getElementById("area").innerHTML = ("Area(A) = "+ area() +" m^2")
    
}

function limp(){
    const canvas=document.getElementById("dibujo");
    const cap=document.getElementById("cap");
    const context=cap.getContext("2d");
    const ctx=canvas.getContext("2d");
    ctx.clearRect(0,0,300,300);
    context.clearRect(0,0,300,300);
}

function draw(){
    var Laargo=document.getElementById("Largo").value;
    console.log(document.getElementById("Largo").value)
    var aancho=document.getElementById("Ancho").value;
    var raadio=document.getElementById("Radio").value;
    const canvas=document.getElementById("dibujo");
    if (canvas.getContext) {
        const ctx=canvas.getContext("2d");
        ctx.fillStyle="turquoise"
        ctx.strokeStyle="turquoise"
        console.log(Laargo)
        if (Laargo!=""){
            ctx.fillRect(ctx.canvas.width/2,ctx.canvas.height/2,(aancho*100)/2,(Laargo*100)/2);
            ctx.fillRect((ctx.canvas.width/2)-((aancho*100)/2),ctx.canvas.height/2,(aancho*100)/2,(Laargo*100)/2);
            ctx.fillRect(ctx.canvas.width/2,(ctx.canvas.height/2)-((Laargo*100)/2),(aancho*100)/2,(Laargo*100)/2);
            ctx.fillRect((ctx.canvas.width/2)-((aancho*100)/2),(ctx.canvas.height/2)-((Laargo*100)/2),(aancho*100)/2,(Laargo*100)/2);
        
        } else {
            ctx.arc((ctx.canvas.width/2),ctx.canvas.height/2,raadio*50,0,Math.PI,false);
            ctx.arc((ctx.canvas.width/2),ctx.canvas.height/2,raadio*50,0,Math.PI,true);
            ctx.fill();
            ctx.stroke();
        }
    }
}
function drawCap(){
    var Laargo=document.getElementById("Largo").value;
    var aancho=document.getElementById("Ancho").value;
    var raadio=document.getElementById("Radio").value;
    var diistancia=document.getElementById("Distancia").value;
    const canvas=document.getElementById("cap");
    if (canvas.getContext) {
        const ctx=canvas.getContext("2d");
        ctx.fillStyle="darkseagreen"
        ctx.fillRect(ctx.canvas.width/2,ctx.canvas.height/2,(aancho*100)/2,(diistancia*100)/2);
        ctx.fillRect((ctx.canvas.width/2)-((aancho*100)/2),ctx.canvas.height/2,(aancho*100)/2,(diistancia*100)/2);
        ctx.fillRect(ctx.canvas.width/2,(ctx.canvas.height/2)-((diistancia*100)/2),(aancho*100)/2,(diistancia*100)/2);
        ctx.fillRect((ctx.canvas.width/2)-((aancho*100)/2),(ctx.canvas.height/2)-((diistancia*100)/2),(aancho*100)/2,(diistancia*100)/2);
        if (Laargo!=""){
            ctx.fillStyle="turquoise"
            ctx.fillRect(ctx.canvas.width/2,(ctx.canvas.height/2)-((diistancia*100)/2)-15,(aancho*100)/2,10);
            ctx.fillRect((ctx.canvas.width/2)-((aancho*100)/2),(ctx.canvas.height/2)-((diistancia*100)/2)-15,(aancho*100)/2,10);
            ctx.fillRect(ctx.canvas.width/2,(ctx.canvas.height/2)+((diistancia*100)/2)+5,(aancho*100)/2,10);
            ctx.fillRect((ctx.canvas.width/2)-((aancho*100)/2),(ctx.canvas.height/2)+((diistancia*100)/2)+5,(aancho*100)/2,10);
        } else {
            ctx.fillRect(ctx.canvas.width/2,ctx.canvas.height/2,(raadio*100)/2,(diistancia*100)/2);
            ctx.fillRect((ctx.canvas.width/2)-((raadio*100)/2),ctx.canvas.height/2,(raadio*100)/2,(diistancia*100)/2);
            ctx.fillRect(ctx.canvas.width/2,(ctx.canvas.height/2)-((diistancia*100)/2),(raadio*100)/2,(diistancia*100)/2);
            ctx.fillRect((ctx.canvas.width/2)-((raadio*100)/2),(ctx.canvas.height/2)-((diistancia*100)/2),(raadio*100)/2,(diistancia*100)/2);
            ctx.fillStyle="turquoise"
            ctx.fillRect(ctx.canvas.width/2,(ctx.canvas.height/2)-((diistancia*100)/2)-15,(raadio*100)/2,10);
            ctx.fillRect((ctx.canvas.width/2)-((raadio*100)/2),(ctx.canvas.height/2)-((diistancia*100)/2)-15,(raadio*100)/2,10);
            ctx.fillRect(ctx.canvas.width/2,(ctx.canvas.height/2)+((diistancia*100)/2)+5,(raadio*100)/2,10);
            ctx.fillRect((ctx.canvas.width/2)-((raadio*100)/2),(ctx.canvas.height/2)+((diistancia*100)/2)+5,(raadio*100)/2,10);
        }
    }
}