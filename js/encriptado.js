function encriptar(){
    
    //Iteracion caracter por caracter
    for (var i =0; i <tdtexto.length; i++){
        msj = tdtexto.substring(i, i+1)
    
        //Consulto y reemplazo caracter
        if (msj == "a"){
        txtEncriptado = txtEncriptado + codigo[0];
        }else if(msj == "e"){
            txtEncriptado = txtEncriptado + codigo[1];
        }else if(msj == "i"){
            txtEncriptado = txtEncriptado + codigo[2];
        }else if(msj == "o"){
            txtEncriptado = txtEncriptado + codigo[3];
        }else if(msj == "u"){
            txtEncriptado = txtEncriptado + codigo[4];
        }else{
            txtEncriptado = txtEncriptado + msj
    
        }
    
        }
        //tomo el input de salida y le asigno el texto encriptado
       
       msg.value= txtEncriptado;
    
       txtEncriptado = "";
        




}