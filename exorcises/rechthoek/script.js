let lengte = document.getElementById('lengte');
let breedte = document.getElementById('breedte');
let oppervlakte = document.getElementById('oppervlakte');
let omtrek = document.getElementById('omtrek');
let button = document.getElementById('button');

oppervlakte.disabled = true;
omtrek.disabled = true;
diagonaal.disabled = true;

button.addEventListener('click', bereken);

function bereken() {
  if (lengte.value == ""){
    lengte.style = "color: red";
    lengte.value = "Vul een waarde in";
  } else if (breedte.value == "") {
    breedte.style = "color: red";
    breedte.value = "Vul een waarde in";
  } else {
  var antwoord1 = lengte.value * breedte.value;
  var antwoord2 = lengte.value * 2 + breedte.value * 2;
  var antwoord3 = Math.sqrt(lengte.value * lengte.value + breedte.value * breedte.value);
  oppervlakte.value = antwoord1;
  omtrek.value = antwoord2;
  diagonaal.value = antwoord3.toFixed(2);
}
}
