'use strict'
var form=document.querySelector("#formulario");
var print =document.querySelector('#imprime');
this.addEventListener('submit',function(){
    console.log("Evento submit");
    var nombre= document.querySelector('#nombre').value;
    var apellido= document.querySelector('#apellidos').value;
    var edad = document.querySelector('#edad').value;

    print.innerHTML=nombre+'<br>'+apellido;
});


