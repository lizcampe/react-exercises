/*1.- 
let arr = [1, 2, 3, 4, 5, 6];
arr.forEach(function(v){
console.log(v);
} );


2.- Haz varios callbacks de forma que se imprima:
1 después de 3 segundos
2 después de 1 segundo
3 después de 4 segundos
En consola debería verse 2 1 3


setTimeout(() => console.log(1), 3000);
setTimeout(() => console.log(2), 1000);
setTimeout(() => console.log(3), 4000);




3.- Escribe un callback que recibe un argumento y lo imprime
let argumento = prompt ("Dime qué imprimo");

function ejemplo1(fn) {
  fn();
}
ejemplo1(function() {
  console.log(argumento);
});  


4.- Crea una función que recibe el callback anterior y lo ejecuta


let nombres = ['yolanda', 'sam', 'goku'];
let argumento = prompt ("Dime qué imprimo");

let hola= function (nombre) {
	console.log('hola' + nombre)
}
 
 nombres.forEach(hola);


 	
nombres.forEach(function (nombreActual){
	hola(nombreActual)


function ejemplo1(fn) {
  fn();
}
ejemplo1(function() {
  console.log(nombreActual + argumento);
});})  

 


5.- Crea una función que llama a un callback y usa el valor que regresa para llamar a otro. Después debe llamar a un tercer callback con el valor que regresa el segundo

function first(callback){
	callback('first');
}
function second(value, callback){
	callback(`second, ${value}`);
}
function third(firstValue, secondValue, callback){
	callback(`third, (${secondValue}), ${firstValue}`);
}

first(firstValue=> {
	second(firstValue, secondValue =>{
		 third(firstValue, secondValue, thirdValue =>{
		 	console.log(thirdValue);
		 });

	});
});






6.- Convierte todos los ejercicios de la parte 1 a usar Promises
/


let arr = [1, 2, 3, 4, 5, 6];
arr.forEach(function(v){
	return new Promise((resolve, reject) => resolve(() => console.log(v))	
});




p1 = new Promise((resolve, reject) => setTimeout(() => console.log(1), 3000));
p2 = new Promise((resolve, reject) => setTimeout(() => console.log(2), 1000));
p3 = new Promise((resolve, reject) => setTimeout(() => console.log(3), 4000));
r = Promise.reject('ahh!'); // Crea una Promesa rechazada
tr = new Promise((resolve, reject) => setTimeout(reject, 1500, 'delay'));



let argumento = prompt ("Dime qué imprimo");
function ejemplo1(p) {
  return Promise.resolve().then(() => console.log(p));
}
ejemplo1(argumento);

__

Promise.resolve('frist').then(firstValue => {
	Promise.resolve(`second, ${firstValue}`).then(secondValue => {
	Promise.resolve(`third, (${secondValue}), ${firstValue}`).then(console.log);
	});
});



const asyncHell = async (){
	const firstValue = await Promise. resolve ('first');
	const secondValue =await Promise, resolve (`second, ${firstvalue}`);
	const thirdValue = await Promise.resolve (`third, (${secondValue}) ${firstValue}`);
};






7.- Crea una Cadena de Promesas en la cual una lanza un error (no hagas Catch)



var promise = new Promise(function(resolve, reject) {
  resolve(1);
});

promise.then(function(val) {
  console.log(val); // 1
  return val + 2;
}).then(function(vl) { //el error
  console.log(val); 
}), function(error) {
  console.log("Failed!", error);
}



8.- Agrega un catch al ejercicio anterior



var promise = new Promise(function(resolve, reject) {
  resolve(1);
});

promise.then(function(val) {
  console.log(val); // 1
  return val + 2;
}).then(function(vl) { //el error
  console.log(val); 
}).catch (function(error) {
  console.log("Failed!", error);
});


9.- Agrega un finally al ejercicio anterior


var promise = new Promise(function(resolve, reject) {
  resolve(1);
});

promise.then(function(val) {
  console.log(val); // 1
  return val + 2;
}).then(function(vl) { //el error
  console.log(val); 
}).catch (function(error) {
  console.log("Failed!", error);
}).finally (function () {promise = "Failed";});



10 .-Crea una función con 3 promesas, que acaben a tiempos diferentes y regresa en cuanto 
la primera termina

*/

function delay(t) {
    return new Promise(function (resolve) {
        setTimeout(resolve, t);
    });
}

Promise.delay = function (fn, t) {
    // fn is an optional argument
    if (!t) {
        t = fn;
        fn = function () {};
    }
    return delay(t).then(fn);
}

Promise.prototype.delay = function (fn, t) {
    // return chained promise
    return this.then(function () {
        return Promise.delay(fn, t);
    });

}

function log(args) {
    var str = "";
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === "object") {
            str += JSON.stringify(arguments[i]);
        } else {
            str += arguments[i];
        }
    }
    var div = document.createElement("div");
    div.innerHTML = str;
    var target = log.id ? document.getElementById(log.id) : document.body;
    target.appendChild(div);
}

function log1() {
    return "Message 1";
}
function log2() {
    return "Message 2";
}
function log3() {
    return "Message 3";
}
//Promise.delay(log1, 1500).delay(log2, 700).delay(log3, 2600);

Promise.race([Promise.delay(log1, 1500), Promise.delay(log2, 700),Promise.delay(log3, 2600)])
.then((mensaje) => { 
console.log(mensaje);
})



/*

11.- Crea una función con 4 promesas, que acaben a tiempos diferentes y 
regresa cuando todas acaben




let varios = variosUno() {
	
	
}




Promise.all  ())
.then





12.- Crea una Cadena de Promesas en la cual una se rechaza, asegurate de 
agregar un catch


13.- Crea una Cadena de Promesas en la cual una se rechaza, agrega varios catch
xplica la salida de las siguientes promesas:

Promise.resolve(1).then(v => v + 3).then(v => Promise.reject(v))
  .then(v => v * 3).catch(e => console.log(e));
Promise.reject(2).then(v => v + 3).catch(e => e * 3).then(v => v - 1).then(v => console.log(v));
Promise.all([Promise.resolve(1), Promise.resolve(2), Promise.reject(3), Promise.resolve(1)])
  .then(arr => console.log(arr)).catch(e => console.log(e));
Promise.race([Promise.resolve(1), Promise.reject(2), Promise.reject(3), Promise.resolve(1)])
  .then(v => console.log(v)).catch(e => console.log(e));
Promise.race([Promise.reject(1), Promise.resolve(2), Promise.reject(3), Promise.resolve(1)])
  .then(v => console.log(v)).catch(e => console.log(e));
Promise.all([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3), Promise.resolve(1)])
  .then(arr => console.log(arr)).catch(arr => console.log(arr));



_________


https://random.dog/woof.json


       var imageParent = document.getElementById("body");
       image.id = "id";
       image.src = data.url;            // image.src = "IMAGE URL/PATH"
       imageParent.appendChild(image);




async function obetenerPerrito() {
	let respuesta = await fetch ("https://random.dog/woof.json");
	console.log(respuesta);


	respuesta.json().then((data) => {

		if (data.url.split(".")[2]=="jpg" || data.url.split(".")[2]=="gif") {
			console.log("foto")
			var image = document.createElement("img");
	   var imageParent = document.getElementById("contenedordeperritos");
       image.id = "id";
       image.src = data.url;            // image.src = "IMAGE URL/PATH"
       imageParent.appendChild(image);
		}else {

			console.log("video")
			var label = document.createElement("label");
	   var imageParent = document.getElementById("contenedordeperritos");
       label.id = "id";
       label.innerHTML ="No puedo poner videos de perritos :((("            // image.src = "IMAGE URL/PATH"
       imageParent.appendChild(label);
		}
	   
	});
}

	obetenerPerrito();

*/



