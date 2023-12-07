/* Jag förstod helheten vad som behövdes i uppgiften från start, men tog mycket felsökning 
samt på vissa platser som restoredata, localstorage samt filter array tog sin tid att få att fungera
som planerat. Annars gick allt som det skulle */


function calculateSum() {
    let inputNumbers = document.getElementById('numbers').value;

    // Splitta strängen till en array av heltal
    let numbersArray = inputNumbers.split(',').flatMap(function (num) {
      return num.split(' ').map(Number);
    });
    // här filtrerar jag bort värden som inte ska funka i koden och värden som redan används
    numbersArray = numbersArray.filter(function (num, index, self) {
      if (isNaN(num) || num % 2 !== 0) {
        alert("Varning: " + num + " är inte ett jämnt heltal.");
        return false; // Ta bort udda nummer
      }
      return self.indexOf(num) === index;
    });

    // Ifall användaren skriver 0 ska programmet avslutas
    if (numbersArray.includes(0)) {
      alert("Programmet avslutas eftersom du matade in 0.");
      resetProgram();
      return;
    }

    // Lägger till heltalen som skrivs ut i local storage så dem finns kvar på sidan om man stänger ner den
    let savedNumbers = JSON.parse(localStorage.getItem('savedNumbers')) || [];
    savedNumbers = savedNumbers.concat(numbersArray);
    localStorage.setItem('savedNumbers', JSON.stringify(savedNumbers));

    // Här gör jag en ny text med heltalen i javascript istället för html
    let heltalElement = document.getElementById('heltal');
    numbersArray.forEach(function (num) {
      let numberDiv = document.createElement('div');
      numberDiv.className = 'numberDiv';
      numberDiv.textContent = num;
      heltalElement.appendChild(numberDiv);
    });

    // Här beräknas summan av alla heltal och resultatet uppdateras
    let totalSum = savedNumbers.reduce(function (acc, current) {
      return acc + current;
    }, 0);

    // Resultatet uppdateras
    let resultElement = document.getElementById('result');
    resultElement.innerHTML = "<p>Summa av alla heltal: " + totalSum + "</p>";
  }

  // Återställ programmet
  document.addEventListener('DOMContentLoaded', function() {
    restoreData();
  });

  function resetProgram() {
    localStorage.removeItem('savedNumbers');
    restoreData();
  }
  
  // en restoredata function för att få hela återställningen för programmet att fungera

  function restoreData() {
    let savedNumbers = JSON.parse(localStorage.getItem('savedNumbers')) || [];
    let totalSum = savedNumbers.reduce(function (acc, current) {
      return acc + current;
    }, 0);

    let heltalElement = document.getElementById('heltal');
    heltalElement.innerHTML = '';
    savedNumbers.forEach(function (num) {
      let numberDiv = document.createElement('div');
      numberDiv.className = 'numberDiv';
      numberDiv.textContent = num;
      heltalElement.appendChild(numberDiv);
    });

    let resultElement = document.getElementById('result');
    resultElement.innerHTML = "<p>Summa av alla heltal: " + totalSum + "</p>";
  }
