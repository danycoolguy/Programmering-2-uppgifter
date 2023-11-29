const minValue = 1;
const maxValue = 99;
const number = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

let attempts = 0;
let guess;
let running = true;
while (running) {
    guess = window.prompt(`Gissa ett nummer emellan ${minValue} - ${maxValue}`);
    guess = Number(guess);
    if(isNaN(guess)) {
        window.alert("Skriv in ett nummer");
    } else if (guess < minValue || guess > maxValue){
        window.alert("Skriv in en siffra mellan 1-99 för att testa vinna!");

    } 
    else {
        attempts++;
        if(guess < number) {
            window.alert(`för lågt den här gången, försök igen!`);
        }
     else if (guess > number) {
        window.alert(`för högt testa igen!`);
     } else {
        window.alert(`Du chansade på rätt siffra mellan 1-99! Svaret var ${number} det tog dig ${attempts} försök, helt otroligt!`);
        running = false;
     }

      }



    }

