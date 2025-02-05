import "bootstrap";
import "./style.css";


import "./assets/img/homero.jpeg";



window.onload = function generadorDeExcusa() {

  let who = ['Mi primo' , 'Mi sobrino','Mi tia','El vecino','Mi bebe' ];
  let action = ['quemo','rompio','estropeo','robo','perdio','mojo'];
  let what = ['mi carro','mi tarea','mi llave','mi ropa','mis gafas'];
  let when = ['depues de la cena','mientras dormia','durante el concierto','cuando fui a trabajar','cuendo estaba en el trabajo'];

  let excusas = who[Math.floor(Math.random() * who.length)] + " " + action[Math.floor(Math.random() * action.length)] + " " + what[Math.floor(Math.random() * what.length)] + " " + when[Math.floor(Math.random() * when.length)];
  document.querySelector(".excuse").innerHTML= excusas;

  
};
