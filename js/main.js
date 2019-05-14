window.onload = inicio;
var pantalladecarga;
var pantalladelogin;
var continuarlogin;
var pantalla_ahorros;
var botonnuevoahorro;
var pantallanuevoahorro;
var boton_cancelarnuevoahorro;
var ahorros=[];
var ahorro;
var nombremeta;
var dias;
var cadacuanto;
var monto;
var motivo;
var guardar;
var contadorn;
var elements=[];
var deleteahorro;
function inicio(){
    inicializarvariables();
    main();
}


function inicializarvariables()
    {   deleteahorro=document.getElementById("delete0");
        guardarA=document.getElementById("guardar_ahorro");
        nombremeta=document.getElementById("name_meta");
        dias=document.getElementById("dias");
        cadacuanto=document.getElementById("cadcuanto");
        monto=document.getElementById("monto");
        motivo=document.getElementById("motivo");
        pantalladelogin=document.getElementById("inicio");
        pantalladecarga=document.getElementById("splash-screen");
        continuarlogin=document.getElementById("continuar-login");
        botonnuevoahorro=document.getElementById("nuevo_ahorro");
        pantalla_ahorros=document.getElementById("mis_ahorros");
        pantallanuevoahorro=document.getElementById("pantallanuevoahorro");
        boton_cancelarnuevoahorro=document.getElementById("salir_nuevoahorro");
        continuarlogin.addEventListener("click",continuelogin); 
        botonnuevoahorro.addEventListener("click",new_ahorro);
        boton_cancelarnuevoahorro.addEventListener("click",salir_nuevoahorro);
        guardarA.addEventListener("click",guardar_ahorro);
     //   deleteahorro.addEventListener("click",eliminar_ahorro);
    }
function main(){
    mostrarpantalla(pantalladecarga);
    setTimeout("cambiopantalla(pantalladelogin,pantalladecarga)", 1500);
    }
function salir_nuevoahorro(){
        cambiopantalla(pantalla_ahorros,pantallanuevoahorro);
        cleardiv();
        cargar_ahorros()
    }
function new_ahorro(){
    cleardiv();
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
          cargar_ahorros()
      }
function guardar_ahorro(){
    contadorn=localStorage.length;
    var fechaInicio=new Date();
    var fechaFinal=fechaInicio;
   fechaFinal=fechaFinal.setDate(fechaFinal.getDate() + dias.value);
    
    ahorro={'nombre_meta':nombremeta.value,'dias':dias.value,'cadacuanto':cadacuanto.value,'monto':monto.value,'motivo':motivo.value, 'clave':contadorn,'fechainicio':fechaInicio,'fechafinal':fechaFinal};
    localStorage.setItem(contadorn, JSON.stringify(ahorro));
    contadorn++;
    limpiarinputs()
      }
function eliminar_ahorro(){
      var nombreevent=evento.target.id.substring(0,evento.target.id.length-1);
      localStorage.removeItem(nombreevent);
      cleardiv();
      cargar_ahorros();

      }
function cargar_ahorros(){
        
        for(var x = 0; x < localStorage.length; x++) {
            elements[x]=JSON.parse(localStorage.getItem(localStorage.key(x)));
        }
        var fechahoy = new Date();
        for(var x = 0; x <elements.length; x++) { 
      //  var diasquefaltan= (fechahoy.getTime()-elements[x].fechafinal/(1000*60*60*24));
        document.getElementById("cuerpo-ahorros").innerHTML += ' <div id="ahorro'+elements[x].clave+'" class="animated slideInDown"> <h2>'+elements[x].nombre_meta+'<img id="delete'+elements[x].key+'" class="delete" src="img/iconoelimimar.png" alt=""> </h1> <h3>Te faltan: <span>$ '+elements[x].monto+' mil</span> </h3><h3>Dias restantes: '+elements[x].dias+' </h3> <hr style="color: #0056b2;" />  </div>';
          }
       

      }
function cleardiv(){
    document.getElementById("cuerpo-ahorros").innerHTML="";
}
function limpiarinputs(){
    nombremeta.value="";
    dias.value="";
    cadacuanto.value="";
    monto.value="";
    motivo.value="";
    }
