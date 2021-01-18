
let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

window.onload = function(){
    
    let excuse = document.getElementById('excuse');

    excuse.innerHTML = excuseElement(who) + ' ' + excuseElement(action) + ' ' + excuseElement(what) + ' ' + excuseElement(when);

}

function excuseElement(arr){

    return arr[Math.floor(Math.random()*arr.length)];

}

