let celsius = document.getElementById('celsius');
let farenheit = document.getElementById('farenheit');
let kelvin = document.getElementById('kelvin');
let button = document.getElementById('button');

farenheit.disabled = true;
kelvin.disabled = true;

button.addEventListener('click', bereken);

function bereken() {
  if (celsius.value == ""){
    celsius.style = "color: red";
    celsius.value = "Vul een waarde in";
  } else {
  var antwoord1 = (9 * celsius.value / 5) + 32;
  var antwoord2 = parseInt(celsius.value) + 273;

  console.log(antwoord1);
  console.log(antwoord2);

  farenheit.value = antwoord1.toFixed(1);
  kelvin.value = antwoord2;
}
}
