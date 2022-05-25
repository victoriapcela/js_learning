// 1. La încărcarea paginii, culoarea textului se setează în galben și în pagina se adaugă un element div cu textul “START”.
var div = document.createElement('div');
div.innerHTML = "START";
div.style.color = 'yellow';
document.body.appendChild(div);

// 2. Creați 2 elemente de tip input, cu numele x și y, un buton “Max” la apăsarea căruia, în elementul div cu id=“rezultat” va fi afișat maximul a numerelor x și y.
var first = prompt('Введите первое число');
var second = prompt('Введите второе число');

var max = function (){
  if (first > second){
    console.log(first)
  } else if (first == second){
    console.log('Числа равны')
  } else {
    console.log(second);
  }
}
max();

//3. Creați 2 elemente de tip input, cu numele x și y, un buton “Schimb” la apăsarea căruia, vor fi schimbate cu locul valorile între aceste input-uri.
document.getElementById("change").addEventListener("click", () => {
    let a;
    a = Number(document.getElementById("x").value);
    Number(document.getElementById("x").value) = Number(document.getElementById("y").value);
    Number(document.getElementById("y").value) = a;
})

//4. Este dat elementul #container. Aplicați acestui element clasa .red {background: red}, la trecerea cursorului deasupra elementului.
$("#container").on("mouseenter", function (){ 
    $("#container").addClass(".red");
});

// 10. Scrieți codul care setează culoarea fundalul paginii în gri, peste 5 secunde după încărcarea paginii.
function changeBackground(color) {
    document.body.style.background = color;
 }
 
 <BODY onload="changeBackground('gray');">