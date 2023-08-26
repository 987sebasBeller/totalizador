const impuestos = {"UT":6.65, "NV": 8, "TX": 6.25, "AL": 4, "CA": 8.25};
class Totalizador{
    constructor(cantItems=0,precioPorItem=0,estado=""){
        this.estado=estado;
        this.cantItems=cantItems;
        this.precioItem=precioPorItem;
        this.precioNeto=cantItems*precioPorItem;
        this.impuestoSegunPrecioNeto=this.precioNeto*(impuestos[this.estado]/100)
    }

    getImpuesto() {
        return impuestos[this.estado];
    }
    getPrecioNeto() {
        return this.precioNeto;
    }
    getImpuestoPorPrecio(){
        return this.impuestoSegunPrecioNeto;
    }
     getPrecioTotalPorImpuesto(){
        let precioTotal=(this.precioNeto+this.impuestoSegunPrecioNeto)
        return Number.parseFloat(precioTotal.toFixed(3));
    }
    getDescuento(precioTotal){
        let descuento=0;
        if(precioTotal<=1000){
            descuento=0.03;
        }
        else if(precioTotal>1000 && precioTotal<=3000){
            descuento=0.05;
        }
        return descuento;
    }
    getPrecioTotalConDescuento(){
        let precioTotal=this.precioNeto+this.impuestoSegunPrecioNeto;
        precioTotal*=(1-this.getDescuento(precioTotal));
        return Number.parseFloat(precioTotal.toFixed(3));
    }
}
export {Totalizador};