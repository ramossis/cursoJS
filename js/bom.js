'use strict'
//BOM Browser Object Model
console.log(window.innerHeight);
console.log(window.innerWidth);

function getUrl(){
    console.log(window.location.href);
}
function getShowUrl(url){
    window.location.href=url;
}
function openWindowUrl(url){
    window.open(url,"",'width-400,height-300');
}