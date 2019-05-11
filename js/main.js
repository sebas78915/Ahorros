window.onload = inicio;
var pantalladecarga;
var pantalladelogin;
var continuarlogin;
var pantalla_ahorros;
var botonnuevoahorro;
var pantallanuevoahorro;
var boton_cancelarnuevoahorro;
function inicio(){
    inicializarvariables();
    main();
}


function inicializarvariables()
    {

        pantalladelogin=document.getElementById("inicio");
        pantalladecarga=document.getElementById("splash-screen");
        continuarlogin=document.getElementById("continuar-login");
        botonnuevoahorro=document.getElementById("nuevo_ahorro");
        pantalla_ahorros=document.getElementById("mis_ahorros");
        pantallanuevoahorro=document.getElementById("pantallanuevoahorro");
        boton_cancelarnuevoahorro=document.getElementById("salir_nuevoahorro");
        continuarlogin.addEventListener("click",continuelogin); 
        botonnuevoahorro.addEventListener("click",new_ahorro);
        boton_cancelarnuevoahorro.addEventListener("click",salir_nuevoahorro)

    }
function main(){
    mostrarpantalla(pantalladecarga);
    setTimeout("cambiopantalla(pantalladelogin,pantalladecarga)", 1500);
    }
    function salir_nuevoahorro(){
        cambiopantalla(pantalla_ahorros,pantallanuevoahorro);
    }
function new_ahorro(){
    cambiopantalla(pantallanuevoahorro,pantalla_ahorros);
}
    function mostrarpantalla(pantalla){
        pantalla.className=pantalla.className.replace( /(?:^|\s)ocultar(?!\S)/g , '' );
      }
        function cambiopantalla(pantalla, pantallaanterior){
        pantallaanterior.className +=" ocultar";
        pantalla.className=pantalla.className.replace( /(?:^|\s)ocultar(?!\S)/g , '' );
      }
      function continuelogin(){
          cambiopantalla(pantalla_ahorros,pantalladelogin)
      }