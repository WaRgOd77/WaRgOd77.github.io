
function tabla1(){
    document.getElementById("datospers").style.visibility = "visible";
    document.getElementById("soni1").play();
    
    
}

function tabla2(){
    document.getElementById("estudios").style.visibility = "visible";
    document.getElementById("soni2").play();
}
    
function tabla3(){
    document.getElementById("trabajos").style.visibility = "visible";
    document.getElementById("soni3").play();
}
 
function atrás(){
    document.getElementById('datospers').style.visibility = 'collapse';
    document.getElementById('estudios').style.visibility = 'collapse';
    document.getElementById('trabajos').style.visibility = 'collapse';
    document.getElementById("soni").play();
}

