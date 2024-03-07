var texto = "";
function getData() {
    "use strict";
    texto = document.getElementById("texto").value;
   
   return texto;
   
}

function escribir(texto){

   document.getElementById("formulario").innerText=texto;

}

function comprobarCampos(texto){
if (texto.length>0){
    
return true
} else {
  return false
}
}

window.onload = function () {
    const button = document.querySelector("button");
    
    button.onclick = function () {
        
        var data = getData();
        if (comprobarCampos(data)==true){
            
            escribir(data);
        } else{
        
           document.getElementById("texto").placeholder="Introduce un usuario correcto";
        }
    }
}
    
    