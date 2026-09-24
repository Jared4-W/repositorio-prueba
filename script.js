const botonMensaje = document.getElementById("botonMensaje");
const mensaje = document.getElementById("mensaje");

botonMensaje.addEventListener("click", function () {
mensaje.textContent = "¡El botón funciona correctamente!";
});
