function desencriptar(){
    txtEncriptado = tdtexto.replace(/enter/gi,"e");
    txtEncriptado = txtEncriptado.replace(/ai/gi,"a");
    txtEncriptado = txtEncriptado.replace(/imes/gi,"i");
    txtEncriptado = txtEncriptado.replace(/ober/gi,"o");
    txtEncriptado = txtEncriptado.replace(/ufat/gi,"u");
    
    msg.value= txtEncriptado;
    txtEncriptado = "";

}