'use strict'

//funciones 
//una funcion es una agrupacion reutilizable de un conjunto de instrucciones
/*
function calculadora(){
    return 'Hola soy una calculadora';
}
let calc=calculadora();
*/
function calculadora(numero1,numero2){
    let suma=numero1+numero2;
    let resta=numero1-numero2;
    let multiplicacion=numero1*numero2;
    let division=numero1/numero2;
    return op[suma,resta,multiplicacion,division];
}
function muestraNumeros(){
    for(let i=0;i<=4;i++){
        document.write(i);
    }
}
muestraNumeros();
