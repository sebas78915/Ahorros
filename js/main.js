window.onload = inicio;
var pantalladecarga;
var pantalladelogin;
var continuarlogin;
var pantalla_ahorros;
var botonnuevoahorro;
var pantallanuevoahorro;
var pantallaprogreso
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
var deleteahorro;
var elements;
function inicio(){
    inicializarvariables();
   main();
}


function inicializarvariables()
    {  
        pantallaahorro_engrupo=document.getElementById("ahorrosengrupo");
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
        pantallaprogreso=document.getElementById("progreso");
        document.getElementById("atrasprogr").addEventListener("click",atrasprogreso);
        document.getElementById("nextahg").addEventListener("click",showmisahorrosg)
        document.getElementById("botontoahorros").addEventListener("click",showmisahorros)
    }
function main(){
    mostrarpantalla(pantalladecarga);
    setTimeout("cambiopantalla(pantalladelogin,pantalladecarga)", 1600);
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
function showmisahorrosg(){
    cambiopantalla( pantallaahorro_engrupo, pantalla_ahorros);
}
function showmisahorros(){
    cambiopantalla(  pantalla_ahorros,pantallaahorro_engrupo);
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
    var fechaFinal=new Date();
    var fechaInicio=new Date();
    fechaFinal.setDate(fechaFinal.getDate()+parseInt(dias.value));  
    console.log(fechaFinal);
    console.log(dias.value); 
    ahorro={'nombre_meta':nombremeta.value,'dias':dias.value,'cadacuanto':cadacuanto.value,'monto':monto.value,'motivo':motivo.value, 'clave':contadorn,'fechainicio':fechaInicio,'fechafinal':fechaFinal,'ahorrado':0,'checkcuotas':0};
    localStorage.setItem(contadorn, JSON.stringify(ahorro));
    contadorn++;
    limpiarinputs();
    console.log(fechaInicio);
    
      }
function eliminar_ahorro(evento){
    var confirmar=confirm("¿Esta seguro de que desea eliminar esta meta de ahorro?");
    if(confirmar){
      var nombreevent=evento.target.id.substring(evento.target.id.length-1);
      localStorage.clear();
      var j=0;
      for(var x = 0; x < elements.length; x++) {
          console.log(elements[x].clave);
          console.log(nombreevent)
          if(elements[x].clave==nombreevent){
           continue;
          }
        if(nombreevent<elements[x].clave) {
            elements[x].clave--;    
        } 
        elements  
        localStorage.setItem(j, JSON.stringify(elements[x]));
        j=j+1;
    }


      cleardiv();
      cargar_ahorros();}

      }
function cargar_ahorros(){
        cleardiv();
       elements= [];
        for(var x = 0; x < localStorage.length; x++) {
            elements[x]=JSON.parse(localStorage.getItem(localStorage.key(x)));
        }
        var fechahoy = new Date();
        for(var x = 0; x <elements.length; x++) {
        var datefinal= new Date(elements[x].fechafinal)
        var diasquefaltan=datefinal.getTime()-fechahoy.getTime();
        
        diasquefaltan=Math.round(diasquefaltan/ (1000*60*60*24));
        var falta=elements[x].monto-elements[x].ahorrado;
     //   document.getElementById("cuerpo-ahorros").innerHTML += ' <div id="" class="animated slideInDown"> <h2>'+elements[x].nombre_meta+'<img id="delete'+elements[x].clave+'" class="delete" src="img/iconoelimimar.png" alt=""> </h1> <h3 id="ahoro'+elements[x].clave+'">Te faltan: <span>$ '+falta+'</span> </h3><h3 id="ahorro'+elements[x].clave+'">Dias restantes: '+diasquefaltan+' </h3> <hr style="color: #0056b2;" />  </div>';
        if(elements[x].monto<=elements[x].ahorrado){
            document.getElementById("cuerpo-ahorros").innerHTML += ' <div id="'+elements[x].clave+'" class="animated  fadeInDownBig"> <h2 id="ahorri'+elements[x].clave+'">'+elements[x].nombre_meta+'<img id="delete'+elements[x].clave+'" class="delete" src="img/iconoelimimar.png" alt=""> </h1> <h3 id="ahoro'+elements[x].clave+'">Meta alcanzada <span> </span> </h3><h3 id="ahorro'+elements[x].clave+'">Dias restantes: '+diasquefaltan+' </h3> <hr style="color: #0056b2;" />  </div>';
        }
        else{
            document.getElementById("cuerpo-ahorros").innerHTML += ' <div id="ahr'+elements[x].clave+'" class="animated  fadeInDownBig"> <h2 id="ahorri'+elements[x].clave+'">'+elements[x].nombre_meta+'<img id="delete'+elements[x].clave+'" class="delete" src="img/iconoelimimar.png" alt=""> </h1> <h3 id="ahoro'+elements[x].clave+'">Te faltan: <span>$ '+falta+'</span> </h3><h3 id="ahorro'+elements[x].clave+'">Dias restantes: '+diasquefaltan+' </h3> <hr style="color: #0056b2;" />  </div>';
        }
      
    }
    for (let i = 0; i < localStorage.length; i++) {
        document.getElementById("delete"+elements[i].clave).addEventListener("click",eliminar_ahorro);
        document.getElementById("ahorro"+elements[i].clave).addEventListener("click",cargar_progreso);
        document.getElementById("ahoro"+elements[i].clave).addEventListener("click",cargar_progreso);
        

        
        
    }
    
       

      }
function cleardiv(){
    document.getElementById("cuerpo-ahorros").innerHTML="";
}
function cleardivprogreso(){
    document.getElementById("cuerpo-progreso").innerHTML="";
    document.getElementById("descrip").innerHTML="";
}
function limpiarinputs(){
    nombremeta.value="";
    dias.value="";
    cadacuanto.value="";
    monto.value="";
    motivo.value="";
    }
    function cargar_progreso(evento) {
        cleardivprogreso();
        cambiopantalla(pantallaprogreso,pantalla_ahorros)
        var nombreevento=evento.target.id;
        nombreevento=nombreevento.substr(nombreevento.length-1);
        console.log(nombreevento)
        var elements= [];
        var fechacuota;
        var fechaformato;
        var checkcuotas;
        
        
            for(var x = 0; x < localStorage.length; x++) {
                elements[x]=JSON.parse(localStorage.getItem(localStorage.key(x)));
            }
            var fechahoy=new Date();
            var datefinal= new Date(elements[nombreevento].fechafinal);
            var resta= datefinal.getTime()-fechahoy.getTime();
            var diasrestantes=Math.round(resta/ (1000*60*60*24));
            var nombrem=elements[nombreevento].nombre_meta;
            var faltan=Math.round(elements[nombreevento].monto-elements[nombreevento].ahorrado);
            document.getElementById("cuerpo-progreso").innerHTML = '<h2 class="h2title animated zoomIn">'+nombrem+'</h2>	<br> <h2 class="h2falta animated zoomIn">Te faltan: <span class="spanfalta animated zoomIn">$'+faltan+'</span></h2> <br> <h2 class="h2falta izq animated zoomIn">Dias restantes:<span class="spanfalta animated zoomIn"> '+diasrestantes+' días</span> </h2> 	<h2 class="h2falta izq animated zoomIn">Has ahorrado:<span class="spanfalta verde animated zoomIn"> $'+elements[nombreevento].ahorrado+'</span></h2> 	<br> <h2 class="h2falta izq animated zoomIn">Cuotas: </h2>'
            var cuotas=Math.round(elements[nombreevento].dias/elements[nombreevento].cadacuanto);
            fechacuota=new Date(elements[nombreevento].fechainicio);
            checkcuotas=elements[nombreevento].checkcuotas;
            if(faltan==0){
               document.getElementById("cuerpo-progreso").innerHTML = '<h2 class="h2title animated zoomIn">'+nombrem+'</h2>	<br> <h2 class="h2falta animated zoomIn">Lo lograste!<span class="spanfalta animated zoomIn"></span></h2> <br> <h2 class="h2falta izq animated zoomIn">Dias restantes:<span class="spanfalta animated zoomIn"> '+diasrestantes+' días</span> </h2> 	<h2 class="h2falta izq animated zoomIn">Has ahorrado:<span class="spanfalta verde animated zoomIn"> $'+elements[nombreevento].ahorrado+'</span></h2> 	<br> <h2 class="h2falta izq animated zoomIn">Cuotas: </h2>'
            }     
            for (let x = 0; x < cuotas; x++) {  
                var nume=x+1;
                fechacuota.setDate(fechacuota.getDate() + parseInt(elements[nombreevento].cadacuanto));
                var dia=fechacuota.getDate();
                var mes=fechacuota.getMonth() + 1;
                var año=fechacuota.getFullYear();
                if(mes< 10){
                mes='0'+mes;
                }
                if(dia<10){
               dia='0'+dia;
                }
                    fechaformato=(`${dia}/${mes}/${año}` );
            
                 
               
                if(checkcuotas){
                document.getElementById("cuerpo-progreso").innerHTML+='<h2 class="h2falta izq verde animated zoomIn">'+nume+'. '+fechaformato+': '+Math.round(elements[nombreevento].monto/cuotas)+' <img src="img/iconochulo.png" alt=""></h2>';
                checkcuotas=checkcuotas-1;
                continue;
                }
               
                document.getElementById("cuerpo-progreso").innerHTML+='<h2 class="h2falta izq rojo animated zoomIn">'+nume+' '+fechaformato+': '+Math.round(elements[nombreevento].monto/cuotas)+' <img id="ahorrar'+nume+''+nombreevento+  '" src="img/botonahorrar.png" alt=""></h2>'
                document.getElementById("ahorrar"+nume+""+nombreevento).addEventListener('click',ahorrar);
            }
            var diferencia=cuotas-elements[nombreevento].checkcuotas;
            for (let i = 0; i < diferencia; i++) {
                var num=cuotas-i;
                document.getElementById("ahorrar"+num+""+nombreevento).addEventListener('click',ahorrar);
            }
            document.getElementById("descrip").innerHTML='<h2>Motivacion</h2> <h2 class="descrip animated zoomIn">'+elements[nombreevento].motivo+'</h2>'
             
        }
    function reloadprogres(numero){

        var nombreevento=numero;
        var elements= [];
        var fechacuota;
        var fechaformato;
        var checkcuotas;
        
            for(var x = 0; x < localStorage.length; x++) {
                elements[x]=JSON.parse(localStorage.getItem(localStorage.key(x)));
            }
            var fechahoy=new Date();
            var datefinal= new Date(elements[nombreevento].fechafinal);
            var resta= datefinal.getTime()-fechahoy.getTime();
            var diasrestantes=Math.round(resta/ (1000*60*60*24));
            var nombrem=elements[nombreevento].nombre_meta;
            var faltan=Math.round(elements[nombreevento].monto-elements[nombreevento].ahorrado);
            document.getElementById("cuerpo-progreso").innerHTML = '<h2 class="h2title">'+nombrem+'</h2>	<br> <h2 class="h2falta">Te faltan: <span class="spanfalta">$'+faltan+'</span></h2> <br> <h2 class="h2falta izq">Dias restantes:<span class="spanfalta"> '+diasrestantes+' días</span> </h2> 	<h2 class="h2falta izq">Has ahorrado:<span class="spanfalta verde"> $'+elements[nombreevento].ahorrado+'</span></h2> 	<br> <h2 class="h2falta izq">Cuotas: </h2>'
            var cuotas=Math.round(elements[nombreevento].dias/elements[nombreevento].cadacuanto);
            fechacuota=new Date(elements[nombreevento].fechainicio);
            checkcuotas=elements[nombreevento].checkcuotas;
            for (let x = 0; x < cuotas; x++) {  
                var nume=x+1;
                fechacuota.setDate(fechacuota.getDate() + parseInt(elements[nombreevento].cadacuanto));
                var dia=fechacuota.getDate();
                var mes=fechacuota.getMonth() + 1;
                var año=fechacuota.getFullYear();
                if(mes< 10){
                mes='0'+mes;
                }
                if(dia<10){
               dia='0'+dia;
                }
                    fechaformato=(`${dia}/${mes}/${año}` );
            
                 
               
                if(checkcuotas){
                document.getElementById("cuerpo-progreso").innerHTML+='<h2 class="h2falta izq verde">'+nume+'. '+fechaformato+': '+Math.round(elements[nombreevento].monto/cuotas)+' <img src="img/iconochulo.png" alt=""></h2>';
                checkcuotas=checkcuotas-1;
                continue;
                }
               
                document.getElementById("cuerpo-progreso").innerHTML+='<h2 class="h2falta izq rojo">'+nume+' '+fechaformato+': '+Math.round(elements[nombreevento].monto/cuotas)+' <img id="ahorrar'+nume+''+nombreevento+  '" src="img/botonahorrar.png" alt=""></h2>'
                document.getElementById("ahorrar"+nume+""+nombreevento).addEventListener('click',ahorrar);
            }
            var diferencia=cuotas-elements[nombreevento].checkcuotas;
            for (let i = 0; i < diferencia; i++) {
                var num=cuotas-i;
                console.log(num);
                document.getElementById("ahorrar"+num+""+nombreevento).addEventListener('click',ahorrar);
            }
            document.getElementById("descrip").innerHTML='<h2>Descripcion</h2> <h2 class="descrip">'+elements[nombreevento].motivo+'</h2>'
            if(faltan==0){
                alert('Felicitaciones has alcanzado tu meta!!')
                document.getElementById("cuerpo-progreso").innerHTML = '<h2 class="h2title">'+nombrem+'</h2>	<br> <h2 class="h2falta">Lo lograste!<span class="spanfalta"></span></h2> <br> <h2 class="h2falta izq">Dias restantes:<span class="spanfalta"> '+diasrestantes+' días</span> </h2> 	<h2 class="h2falta izq">Has ahorrado:<span class="spanfalta verde"> $'+elements[nombreevento].ahorrado+'</span></h2> 	<br> <h2 class="h2falta izq">Cuotas: </h2>'
            }     
        }
    function ahorrar(evento){
    var nombreevento=evento.target.id;
    nombreevento=nombreevento.substring(nombreevento.length-1);
    console.log(nombreevento)
    var ahorrado=parseInt(elements[nombreevento].monto)/(parseInt(elements[nombreevento].dias)/parseInt(elements[nombreevento].cadacuanto))
    elements[nombreevento].ahorrado+=ahorrado;
    elements[nombreevento].checkcuotas++;
    editaritem(elements[nombreevento],nombreevento);
    cleardivprogreso();
    reloadprogres(nombreevento);


    }
    function editaritem(elemento,num){
    localStorage.removeItem(num);
    localStorage.setItem(num, JSON.stringify(elemento));

    }
    function atrasprogreso(){
    cambiopantalla(pantalla_ahorros,pantallaprogreso);
    cleardiv();
    cargar_ahorros();
    }
    function guardarlocalstorage(){

    }
    