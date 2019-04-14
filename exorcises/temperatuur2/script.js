let celsius = document.getElementById('celsius');
let farenheit = document.getElementById('farenheit');
let kelvin = document.getElementById('kelvin');
let button = document.getElementById('button');

farenheit.disabled = true;
celsius.disabled = true;

button.addEventListener('click', bereken);

function bereken() {
    if (kelvin.value == ""){
      kelvin.style = "color: red";
      kelvin.value = "Vul een waarde in";
    } else {
  var antwoord1 = parseInt(kelvin.value) - 273;
  var antwoord2 = (kelvin.value - 273.15) * 1.8 + 32;

  console.log(antwoord1);
  console.log(antwoord2);

  celsius.value = antwoord1;
  farenheit.value = antwoord2.toFixed(1);
}
}
