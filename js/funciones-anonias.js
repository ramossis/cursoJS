'use strict'

//funciones anonimas
//funcion que no tiene nombre
var pelicula = function(nombre){
    return "La pelicula"+nombre;
}

//funciones de callback

function sumame(numero1,numero2,sumaYmuestra,sumaPorDos){
    var suma=numero1+numero2;
    sumaYmuestra(suma);
    sumaPorDos(suma);
    return suma;
}
sumame(2,3,function(dato){
    console.log("la suma es: "+dato);
},function(dato){
    console.log("La suma por dos es: "+(dato*2));
});