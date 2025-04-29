const targetAge = Math.floor(Math.random() * 20) + 1;
let triesLeft = 6;

function checkGuess() {
  const guess = parseInt(document.getElementById("guess").value);
  const message = document.getElementById("message");
  const triesDisplay = document.getElementById("tries");

  if (isNaN(guess) || guess < 1 || guess > 20) {
    message.textContent = "Entre un nombre entre 1 et 20, Padawan.";
    message.className = "";
    return;
  }

  triesLeft--;

  if (guess === targetAge) {
    message.textContent = "WELL PLAYED master !";
    message.className = "success";
    triesDisplay.textContent = "";
  } else if (triesLeft > 0) {
    message.textContent = "GAME OVER, try again little Jedi !";
    message.className = "fail";
    triesDisplay.textContent = `Essais restants : ${triesLeft}`;
  } else {
    message.textContent = `C'était ${targetAge}. GAME OVER, try again little Jedi !`;
    message.className = "fail";
    triesDisplay.textContent = "Tu as épuisé tes essais.";
  }
}

