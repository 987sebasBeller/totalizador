import {Totalizador} from "./totalizador";

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
  let totalizador=new Totalizador(cant,precio,estadoTexto);
  const precioNeto = totalizador.precioNeto;
  div.innerHTML = `<p> Precio Neto(${cant}*$${precio}): $ ${precioNeto}  </p>`;
  div.innerHTML += `<p> Descuento:${totalizador.getDescuento(totalizador.getPrecioTotalPorImpuesto())}  </p>`;
  
  
});
