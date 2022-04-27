'use strict'
//Fetch(ajax) y peticiones a servicios /apis rest
const divUsuarios=document.querySelector('#usuarios');

/*var usuarios=[];
fetch('https://jsonplaceholder.typicode.com/users').then(data =>data.json()).then(data=>{

    usuarios=data;
    console.log(usuarios);

    usuarios.map((users,i)=>{
        let nombre=document.createElement('h2');
        nombre.innerHTML=i+users.address.street ;
        divUsuarios.appendChild(nombre);
    });
});
*/
  
//PROMESAS
//permiten usar de manera mas optima en callbacks evitando los callbakcs hell
getUsuarios().then(data => data.json()).then(users=>{
    console.log(users);
    listaUsuarios(users);
    return getInfo();   
}).then(data =>{
    console.log(data);
});

function getUsuarios(){
    return fetch('https://jsonplaceholder.typicode.com/users');
}
function listaUsuarios(user){
        let usuarios=user
        usuarios.map((users,i)=>{
        let nombre=document.createElement('h2');
        nombre.innerHTML=i+users.name
        divUsuarios.appendChild(nombre);

    });
}
function getInfo(){
    var profesor={
        nombre:'Ronaldo',
        apellidos:'Ramos',
    };
    //creacion de una promesa
    return new Promise((resolve,reject)=>{
        var profesor_string=JSON.stringify(profesor);
        if(typeof profesor_string!='string') return reject('error');

        return resolve(profesor_string);
    });
}
function getOne(){
    return console.log("RATAS");
}
getOne();
