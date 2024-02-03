function alternarLampada() {
var lampada = document.getElementById("lampada");


if (lampada.classList.contains("lampada-acesa")) {
  lampada.src = "lampada_apagada.png";
  lampada.classList.remove("lampada-acesa");
  lampada.classList.add("lampada-apagada");
} else {
  lampada.src = "lampada.png";
  lampada.classList.remove("lampada-apagada");
  lampada.classList.add("lampada-acesa");
}
}