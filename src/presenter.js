import { getImpuesto, getPrecioNeto} from "./totalizador";

const cantItems = document.querySelector("#cant-items");
const precioItem = document.querySelector("#precio");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");
const estado = document.querySelector("#estado")
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cant = Number.parseInt(cantItems.value);
  const precio=Number.parseInt(precioItem.value);
  const estadoTexto = estado.value; 
  const impuesto = getImpuesto(estadoTexto);
  const precioNeto = getPrecioNeto(cant, precio);
  div.innerHTML = "<p>" + cant + "</p>";
  div.innerHTML += "<p>" + precio + "</p>";
  div.innerHTML += "<p>" + estadoTexto + "</p>";
  div.innerHTML += "<p>" + impuesto + "</p>";
  div.innerHTML += "<p> Precio Neto: " + precioNeto + "</p>";
  
});
