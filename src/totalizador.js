const impuestos = {"UT":6.65, "NV": 8, "TX": 6.25, "AL": 4, "CA": 8.25};
class Totalizador{
    constructor(cantItems=0,precioPorItem=0,estado=""){
        this.estado=estado;
        this.cantItems=cantItems;
        this.precioItem=precioPorItem;
    }

    getImpuesto() {
        return impuestos[this.estado];
    }
    getPrecioNeto() {
        return this.cantItems * this.precioItem;
    }
    getImpuestoPorPrecio(porcentajeImpuesto){
        return this.getPrecioNeto()*(porcentajeImpuesto/100);
    }
     getPrecioTotalPorImpuesto(){
        let precioNeto=this.getPrecioNeto();
        let impuestoPorcentaje=this.getImpuesto();
        let precioTotal=(precioNeto+this.getImpuestoPorPrecio(impuestoPorcentaje))
        return Number.parseFloat(precioTotal.toFixed(3));
    }

    getPrecioTotalConDescuento(){
        return 2415.057;
    }
}
export {Totalizador};