'use strict'

//selecciona elementos de DOM con id 
var caja = document.getElementById('micaja');
function cambiaColor(color){
    caja.style.background=color;
}
caja.innerHTML="Muestra desde DOM JS test by 1st div";
caja.style.padding="20px";
caja.style.background="green";
caja.style.borderBottom="5px";

//selecciona elementos DOM ya sea id o class 
var caja2=document.querySelector("#caja2");
caja2.style.padding="20px";
caja2.style.background="red";

//selecciona elementos de DOM por el nombre de etiquetas
var divCollection=document.getElementsByTagName('div');
console.log(divCollection[2]);
var collectionColors =["blue","yellow","pink","orange"];

divCollection[3].innerHTML="asdasd";
console.log(divCollection);

var divAmarillo=document.querySelector(".amarillo");
divAmarillo.style.background="yellow";
if(divAmarillo="yellow"){
    divCollection[4].innerHTML="Prueba IF correcto";
}