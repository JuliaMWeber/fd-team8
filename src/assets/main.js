let counterVal = localStorage.getItem(counterValUebergabe());

if(counterVal=== null){
  counterVal=0;
}

function restartEscape(){
  counterVal=0;
}

function incrementClickLinks() {
  if (counterVal < 100) {
    updateDisplayLinks(counterVal += 6);
  }
}

function incrementClickRechts() {
  if (counterVal < 100) {
    updateDisplayRechts(counterVal += 6);
  }
}

function incrementClickMitte() {
  if (counterVal < 100) {
    updateDisplayMitte(counterVal += 6
    );
  }
}

function counterValUebergabe() {
  let linkerVal = localStorage.getItem('counterValueLinks');
  let mittlererVal = localStorage.getItem('counterValueMitte');
  let rechterVal = localStorage.getItem('counterValueRechts');

  if (linkerVal < rechterVal) {
    linkerVal = rechterVal;
    return linkerVal;
  } else if (linkerVal < mittlererVal) {
    linkerVal = mittlererVal;
    return linkerVal
  }

  if (rechterVal < linkerVal) {
    rechterVal = linkerVal;
    return rechterVal
  } else if (rechterVal < mittlererVal) {
    rechterVal = mittlererVal;
    return rechterVal
  }

  if (mittlererVal < rechterVal) {
    mittlererVal = rechterVal
    return mittlererVal
  } else if (mittlererVal < linkerVal) {
    mittlererVal = linkerVal
    return mittlererVal
  }
}

function updateDisplayMitte(val) {
  document.getElementById('counterValueMitte').innerHTML = val;


  if (val < 25) {
    document.getElementById('counterMitte').style.backgroundColor = "#ff0000";
  } else if (val < 50) {
    document.getElementById('counterMitte').style.backgroundColor = "#ffa500";
  } else if (val > 75 && val < 99) {
    document.getElementById('counterMitte').style.backgroundColor = "#ddff00";
  } else if (val >= 100) {
    document.getElementById('counterMitte').style.backgroundColor = "#00ff00";
  }
  if (val >=100) {
    window.location.href='/endpage'
  }

}

function updateDisplayLinks(val) {
  document.getElementById('counterValueLinks').innerHTML = val;


  if (val < 25) {
    document.getElementById('counterLinks').style.backgroundColor = "#ff0000";
  } else if (val < 50) {
    document.getElementById('counterLinks').style.backgroundColor = "#ffa500";
  } else if (val > 75 && val < 99) {
    document.getElementById('counterLinks').style.backgroundColor = "#ddff00";
  } else if (val >= 100) {
    document.getElementById('counterLinks').style.backgroundColor = "#00ff00";
  }
  if (val >= 100) {
    window.location.href='/endpage'
  }

}

function updateDisplayRechts(val) {
  document.getElementById('counterValueRechts').innerHTML = val;

  if (val < 25) {
    document.getElementById('counterRechts').style.backgroundColor = "#ff0000";
  } else if (val < 50) {
    document.getElementById('counterRechts').style.backgroundColor = "#ffa500";
  } else if (val > 75 && val < 99) {
    document.getElementById('counterRechts').style.backgroundColor = "#ddff00";
  } else if (val >= 100) {
    document.getElementById('counterRechts').style.backgroundColor = "#00ff00";
  }
  if (val >= 100) {
    window.location.href='/endpage'
  }

}


function ValidateFormMitte(fragenName, richtigeAntwort, buttonName) {
  let moeglichkeiten = document.getElementsByName(fragenName);
  let antwort = document.getElementById(richtigeAntwort).value;
  let button = document.getElementById(buttonName);

  for (let j = 0; j < moeglichkeiten.length; j++) {
    if (moeglichkeiten[j].checked === true) {
      const userAntwort = moeglichkeiten[j].value;
      if (userAntwort === antwort) {
        incrementClickMitte();
        button.disabled = true;
      }
    }
  }
}

function ValidateFormLinks(fragenName, richtigeAntwort, buttonName) {
  let moeglichkeiten = document.getElementsByName(fragenName);
  let antwort = document.getElementById(richtigeAntwort).value;
  let button = document.getElementById(buttonName);

  for (let j = 0; j < moeglichkeiten.length; j++) {
    if (moeglichkeiten[j].checked === true) {
      const userAntwort = moeglichkeiten[j].value;
      if (userAntwort === antwort) {
        incrementClickLinks();
        button.disabled = true;

      }
    }
  }
}

function ValidateFormRechts(fragenName, richtigeAntwort, buttonName) {
  let moeglichkeiten = document.getElementsByName(fragenName);
  let antwort = document.getElementById(richtigeAntwort).value;
  let button = document.getElementById(buttonName);

  for (let j = 0; j < moeglichkeiten.length; j++) {
    if (moeglichkeiten[j].checked === true) {
      const userAntwort = moeglichkeiten[j].value;
      if (userAntwort === antwort) {
        incrementClickRechts();
        button.disabled = true;

      }
    }
  }
}



