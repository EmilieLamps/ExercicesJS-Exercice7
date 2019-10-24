function calc () {
let shoeSize = document.getElementById("shoeSize").value;
let yearOfBirth = document.getElementById("yearOfBirth").value;
let result = shoeSize * 2 ;
result = result + 5;
result = result * 50;
result = result - yearOfBirth;
result = result + 1766;
// erreur lors de l'essai avec les parenthèses pour le calcul
  alert(result);
}
