
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var encriptar = document.querySelector("#btn-encriptar");
var desencriptar =document.querySelector("#btn-desencriptar");
var tdtexto;
var msj;
var txtEncriptado = "";
var codigo = ["ai","enter","imes","ober","ufat"];

var msg = document.querySelector("#msg")

//boton encriptado
encriptar.addEventListener("click", function(event){
    event.preventDefault();
    //tomo los datos del input
    tdtexto = document.querySelector("#input-texto").value;
    var min = validarMinuscula();
    var til = validarTilde();
    if ((min == 1) && (til == 1)){
        encriptar();
    }
    min = 0;
    til = 0;
    
});

//boton desencriptado
desencriptar.addEventListener("click", function(event){
    event.preventDefault();
    
    
    //tomo los datos del input
    tdtexto = document.querySelector("#input-texto").value;
    var min = validarMinuscula();
    var til = validarTilde();
    if ((min == 1) && (til == 1)){
        desencriptar();
        }
    min = 0;
    til = 0;
});


function validarMinuscula(){
    var tex = tdtexto.toLowerCase();

    if(tdtexto == tex){
        return 1;
    }else{  
         alert("Contiene mayuscula");
        return 0;
    }
}


function validarTilde() {
    var tex = tdtexto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if(tdtexto == tex){
        return 1;
    }else{  
         alert("Contiene tilde");
        return 0;
    }
  } 





var copi = document.querySelector("#btn-copy")
copi.addEventListener("click",function(){
    msg.select();
    document.execCommand("copy");

});



