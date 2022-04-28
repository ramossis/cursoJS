var bicicleta={
    color:"Rojo",
    modelo:"BMX",
    frenos:"De Disco",
    velocidadMaxima:"60Km",
    cambiaColor:function(NuevoColor){
        this.color=NuevoColor;
        console.log(this.color);
    }
}

bicicleta.cambiaColor("Azul");
console.log(bicicleta);