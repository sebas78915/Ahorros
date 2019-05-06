window.onload = inicio;
var pantalladecarga;
var pantalladelogin;
var continuarlogin;
var pantalla_ahorros;
function inicio(){
    inicializarvariables();
    main();
}


function inicializarvariables()
    {

        pantalladelogin=document.getElementById("inicio");
        pantalladecarga=document.getElementById("splash-screen");
        continuarlogin=document.getElementById("continuar-login");
        pantalla_ahorros=document.getElementById("mis_ahorros");
        continuarlogin.addEventListener("click",continuelogin); 

    }
function main(){
    mostrarpantalla(pantalladecarga);
    setTimeout("cambiopantalla(pantalladelogin,pantalladecarga)", 1500);
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