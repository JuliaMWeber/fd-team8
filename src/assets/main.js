var counterValue = document.getElementsByClassName('counterValue').innerHTML;
window.addEventListener('click', colorChange())


function colorChange(){
    var zahl = parseInt(counterValue);
    if (zahl <= 25) {
      return document.getElementsByClassName(counter).backgroundColor = "#ff0000";
    } else if (counterValue < 50) {
      return document.getElementsByClassName(counter).backgroundColor = "#ffa500";
    } else if (zahl <= 75) {
      return document.getElementsByClassName(counter).backgroundColor = "#ddff00";
    } else {
      return document.getElementsByClassName(counter).backgroundColor = "#00ff00";
    }
}
