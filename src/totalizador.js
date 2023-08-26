
function getImpuesto(estado) {
    let impuestos = {"UT":6.65, "NV": 8, "TX": 6.25, "AL": 4, "CA": 8.25}
    return impuestos[estado];
}

function getPrecioNeto(cantItems, precioItem) {
    return cantItems * precioItem;
}
function getImpuestoPorPrecio(precio,porcentajeImpuesto){
    return precio*porcentajeImpuesto/100
}
function getPrecioTotalPorImpuesto(cantidad,precioPorItem,estado){
    let precioNeto=getPrecioNeto(cantidad,precioPorItem);
    let impuestoPorcentaje=getImpuesto(estado);
    let precioTotal=(precioNeto+getImpuestoPorPrecio(precioNeto,impuestoPorcentaje))
    return Number.parseFloat(precioTotal.toFixed(3));
}
export {getImpuesto, getPrecioNeto,getPrecioTotalPorImpuesto};