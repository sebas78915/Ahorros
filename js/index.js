window.onload = inicio;

function inicio(){
    inicializarVariables();
}

function desaparecer(){
    var pantalla = document.getElementById("pantalla_carga");
    // pantalla.style.display = "none";
    pantalla.className="ocultar animated bounceOut"
    mis_ahorros.className="mostrar animated slideInUp";
}
setTimeout(desaparecer,3000);

function inicializarVariables(){
    
}