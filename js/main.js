"use strict";
const message = document.querySelector(".message");
const checking = document.querySelector(".check");
const number = document.querySelector(".number");
const currentScore = document.querySelector(".score");
const bestScore = document.querySelector(".highscore");
const backgroundBody = document.querySelector("body");
const playAgain = document.querySelector(".again");
// const guessing = Number(document.querySelector('.guess').value);

//Creando funciones para hacer mas legible el código

const displayMessage = (messageText) => {
  message.textContent = messageText;
};

const numberDisplay = (guessingNumber) => {
  number.textContent = guessingNumber;
};

const changeColorBackground = (color) => {
  backgroundBody.style.backgroundColor = color;
};

const displayCurrentScore = (scoreText) => {
  currentScore.textContent = scoreText;
};

//Variables del puntaje

let score = 20;

let highscore = 0;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

// console.log(secretNumber);


checking.addEventListener("click", function guessingHandler() {
  const guessing = Number(document.querySelector(".guess").value);

//LOGICA DEL JUEGO
  
  //Jugador pone 0

  if (!guessing) {
    displayMessage("Ese número no esta dentro del rango a adivinar, no cuenta!");

    //Jugador Gana
    
  } else if (guessing === secretNumber) {
    // checking.removeEventListener('click', guessingHandler);
    displayMessage("FELICIDADEEEEEES HAZ GANADO!");
    numberDisplay(secretNumber);
    changeColorBackground("#60b347");
    displayCurrentScore(score);
    message.style.textAlign = "Center";

    // Hacemos que Highscore mantenga el valor de score

    if (score > highscore) {
      highscore = score;
      bestScore.textContent = highscore;
    }

    //Jugador pierde
    
  } else if (guessing !== secretNumber) {
    if (score > 1) {
      
      //Jugador adivina

      displayMessage(guessing > secretNumber ? "Te pasaste..." : "Te falta..."); //Refactorizamos con operador ternario dentro de la funcion de displayMessage
      displayCurrentScore(score);
      score--;
    } else {
      //checking.removeEventListener('click', guessingHandler);
      displayMessage("Noooo, haz perdido!");
      numberDisplay(secretNumber);
      changeColorBackground("#900C3F");
      displayCurrentScore(0);
    }
  }
});

//RESETEO DEL JUEGO

//Event lister para boton de reseteo

playAgain.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  //console.log(secretNumber);

  displayMessage("Empieza a adivinar...");
  numberDisplay("?");
  changeColorBackground("#222");
  displayCurrentScore(score);
  document.querySelector(".guess").value = "";
});
