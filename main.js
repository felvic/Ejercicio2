/* ----------------------Ejercicio 2------------------- */

/* Pedir nota por teclado */

var nota = prompt("¿Cual fue tu nota final?");

/* Resultado  */

if (nota == 0 || nota == 1 || nota == 2 )
{
  alert("Lo sentimos, obtuviste un \"Muy deficiente\".");
}
else if (nota == 3 || nota == 4)
{
  alert("Tienes mucho que mejorar, obtuviste un \"Insuficiente\".");
}
else if (nota == 5 || nota == 6)
{
  alert("Nada mal, obtuviste un \"Sufiente\".");
}
else if (nota == 7 || nota == 8)
{
  alert("Eso eso, obtuviste un \"Notable\".");
}
else if (nota == 9 || nota == 10)
{
  alert("Felicidades, obtuviste un \"Sobresaliente\", sigue asi.");
}
else {
  alert("Tu nota debera estar comprendida entre los numeros 0 y 10 para que te de un resultado");
}
