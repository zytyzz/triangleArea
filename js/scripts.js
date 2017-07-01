//script.js
function triangleArea(){ 
  var a = document.getElementById("a").value;
  var h = document.getElementById("h").value; 

  if (1*a < 0||1*a == 0){ alert("Nie wykonam obliczeń bo któraś z liczb nie jest dodatnia!");}
  if (1*h < 0||1*h == 0){ alert("Nie wykonam obliczeń bo któraś z liczb nie jest dodatnia!");}

  var triangleArea = a * h / 2;

  document.getElementById("wynik").innerHTML = triangleArea;
  
  console.log("Triangle field with base a: " + a + " and height h: " + h + " is equal to: " + triangleArea);
}