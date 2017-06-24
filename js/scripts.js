//script.js
function triangleArea(){
  var a = document.getElementById("a").value;
  var h = document.getElementById("h").value; 
  var triangleArea = a * h / 2;

  document.getElementById("wynik").innerHTML = triangleArea;
  
  console.log("Triangle field with base a: " + a + " and height h: " + h + " is equal to: " + triangleArea);
}