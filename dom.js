

// Para todos los ejercicios, si no se especifica que se espera que haga un listener, 
// asuman que debe imprimir algo
 window.onload = () => {


  // Agrega contenido a div1 (ejemplo: 'I am a div!')
 /* #div1 {
     function load() {
        alert("I am a div");
      }
      window.onload = load;
       }
*/
const log = document.querySelector('#div1');
    log.innerText = 'I am a div!';

  // Agrega contenido al span de div2 (ejemplo: 'I am a span!')
const va = document.querySelector('#div2 .a-span');  //el espacio indica que es "hijo" del anterior en este caso div2
    va.innerText = 'I am a span!';

  // Agrega un listener de click al boton de div3, el listener debe imprimir algo (ejemplo: 'I was clicked')

let button = document.querySelector("#div3 .a-button");
button.addEventListener("click", function(event){
   console.log("I was clicked");
});

  // Agrega un listener de click al boton de div4, no dejes que haga el submit e imprime 'Default prevented'
let button1 = document.querySelector("#div4 .a-button");
button1.addEventListener("click", function(event){
     event.preventDefault(); 
     console.log("Default prevented");
});


  // Agrega un listener de click a div5, imprime el target del evento

document.querySelector("#div5").addEventListener("click", function(event){
     console.log(event.target);
});

  // Agrega un listener de click al span de div6 y a la div6, imprime el target del evento 
  //en ambos y si es el listener de div o de span

document.querySelector("#div6").addEventListener("click", (event)=> alert (`Div listener: ${event.target}`));
 
document.querySelector("#div6 .a-span").addEventListener("click", (event)=> alert (`Span listener: ${event.target}`));    

  // Agrega un listener de click al span de div7 y a la div7, imprime el target del evento
// en ambos y si es el listener de div o de span, evita que el click del span se propague

document.querySelector("#div7").addEventListener("click", (event)=> alert (`Div listener: ${event.target}`));
 
document.querySelector("#div7 .a-span").addEventListener("click", (event)=> { event.stopPropagation();
 alert (`Span listener: + "CUIDADOO" + ${event.target}`); });


  // Selecciona los spans de div8, agrega el numero que son como contenido a cada una (1-6)

  document.querySelectorAll("#div8 .a-span").forEach((span,index)=> span.innerText=index+1); // querySelectorAll para que agarre todos ! FOR EACH (1 valor que se está recorriendo, segundo el índice actual de todo el arreglo(+1 para que no inicie en cero))

  // Agrega un listener de click al primer y ultimo span de div9
  document.querySelector("#div9 .a-span").addEventListener("click", () => alert ('primer span'));
  document.querySelector("#div9 .a-span:last-of-type").addEventListener("click", () => alert ('segundo span'));


  // Agrega un listener de click a los spans impares de div10 (1, 3, 5)
    document.querySelectorAll("#div10 .a-span:nth-of-type(odd)").forEach((span, index)=> span.addEventListener("click",()=> alert ('impares')));


  // Agrega otro span a div11, con 'not-a-span' como clase y 'Not a span!' como contenido
  
  const notAspan11= document.createElement("span");
  notAspan11.className = 'not-a-span';
  notAspan11.innerText = 'not-a-span';
  document.querySelector('#div11').appendChild(notAspan11);


  // Cambia el src de la imagen de div12 a dogge.jpg (adjunto)
  document.querySelector('#div12 img').setAttribute('src', 'dogge.jpg');

  // Pon 'THE-span' como id del span de div13
  document.querySelector('#div13 span').setAttribute('id', 'THE-span');
  /*
 Agrega listeners a los 3 inputs de div14.
   * change para changeInput
   * blur para blurInput
   * ambos para bothInput
Los listeners deben imprimir el nombre del target del evento
   */

    document.querySelector('#div14
    document.querySelector('#div14
    document.querySelector('#div14
  /**
   * Agrega un listener al span de div15 que, cuando el mouse pase por encima, cambie el texto a 'I am being hovered'. Debe volver al texto original cuando el mouse deje de estar encima.
   */
  /**
   * Agrega un listener de scroll a la div16.
   * Debe imprimir algo ('I was scrolled') cada vez que se hace scroll de ella. Se recomienda NO usar alert para este ejercicio.
   */
};