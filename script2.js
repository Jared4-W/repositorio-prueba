const boton = document.getElementById("miBoton");

boton.addEventListener("click", () => {
  // Cambiar el texto del botón
  boton.textContent = "¡Gracias por hacer clic!";
  
  // Cambiar el color de fondo
  document.body.style.backgroundColor = "#e0f7fa";
});