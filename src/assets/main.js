var counterVal = 0;

function incrementClick() {
  if (counterVal<100){
  updateDisplay(counterVal += 10);
  }

}

function updateDisplay(val) {
  document.getElementById('counterValueMitte', 'counterLinks', 'counterRechts').innerHTML = val;

  if (val < 25) {
    document.getElementById('counterMitte', 'counterRechts', 'counterLinks').style.backgroundColor = "#ff0000";
  } else if (val < 50) {
    document.getElementById('counterMitte', 'counterRechts', 'counterLinks').style.backgroundColor = "#ffa500";
  } else if (val > 75 && val < 99) {
    document.getElementById('counterMitte', 'counterRechts', 'counterLinks').style.backgroundColor = "#ddff00";
  } else if (val >= 100) {
    document.getElementById('counterMitte', 'counterRechts', 'counterLinks').style.backgroundColor = "#00ff00";
  }
  if (val === 100) {
    alert("Herzlichen Glückwunsch. Du wirst die Klausur bestehen!")
  }

}


function ValidateForm(fragenName, richtigeAntwort, buttonName) {
  let moeglichkeiten = document.getElementsByName(fragenName);
  let antwort = document.getElementById(richtigeAntwort).value;
  let button = document.getElementById(buttonName);

  for (let j = 0; j < moeglichkeiten.length; j++) {
    if (moeglichkeiten[j].checked === true) {
      const userAntwort = moeglichkeiten[j].value;
      if (userAntwort === antwort) {
        incrementClick();
        button.disabled=true;

      }
    }
  }
}
