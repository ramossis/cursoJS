'use strict'

//JSON : Java Script Object Notation

var peliculas={
    titulo :'Avengers',
    año :'2018',
    genero :'Accion'
};
var index;
var peliContainer=document.querySelector("#peliculas");
for(index in peliculas){
    var p= document.createElement("p");
    p.append(index.año);
    peliContainer.append(p);
}
console.log(peliculas);