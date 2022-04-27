'use strict'
/*
1. Pida numeros por pantalla y los meta en un array
*/
var array =[];
var n=parseInt(prompt("Ingresa el tamaño del array",0));
for(let i=0;i<=n;i++){
    array[i]=parseInt(prompt("Ingresa el numero:"+i));
}
//2.- Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola

for(let i=0;i<array.length;i++){
    document.write("<ul><li>"+array[i]+"</li></ul>");
}
console.log(array);

//3.- Ordenarlo y mostrarlo
array.sort();
document.write("<h1>array ordenado</h1>");
array.forEach((n,i)=>{
    document.write(n);
});
//invertir su orden y mostralo
array.reverse();
document.write("<h1>Array Invertido</h1>")
array.forEach((n,i)=>{
    document.write(n);
});
//contar elemntos 
var nroElementos=array.length
document.write("<h1>Numero de Elemnetos en Array</h1>");
document.write(nroElementos);