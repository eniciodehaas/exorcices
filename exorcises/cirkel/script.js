let oppervlakte = document.getElementById('oppervlakte');
let omtrek = document.getElementById('omtrek');
let input = document.getElementById('input');
let button = document.getElementById('button');
omtrek.disabled = true;
oppervlakte.disabled = true;

button.addEventListener('click', bereken);
function bereken() {
  if (input.value == ""){
    input.style = "color: red";
    input.value = "Vul een waarde in";
  } else {
  var antwoord1 = Math.pow(input.value, 2) * Math.PI;
  var antwoord2 = input.value * 2 * Math.PI;
  console.log(oppervlakte);
  console.log(omtrek);

  oppervlakte.value = antwoord1.toFixed(2);
  omtrek.value = antwoord2.toFixed(2);
}
}
