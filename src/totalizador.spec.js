import {Totalizador} from "./totalizador";
describe("Totalizador de ventas",()=>{
    it("Impuesto para el estado CA",()=>{
        expect(getImpuesto("CA")).toEqual(8.25);
    });

    it("Impuesto para el estado NV",()=>{
        expect(getImpuesto("NV")).toEqual(8);
    });

    it("Impuesto para el estado TX",()=>{
        expect(getImpuesto("TX")).toEqual(6.25);
    });
    it("Impuesto para el estado AL",()=>{
        expect(getImpuesto("AL")).toEqual(4);
    });

    it("Impuesto para el estado UT",()=>{
        expect(getImpuesto("UT")).toEqual(6.65);
    });

    it("Precio neto para cantidad 5 precio por item 20",()=>{
        expect(getPrecioNeto(5,20)).toEqual(100);
    });

    it("Precio neto para cantidad 23 precio por item 24.2",()=>{
        expect(getPrecioNeto(23,24.2)).toEqual(556.6);
    });
    it("Precio total con impuesto para cantidad 23 precio por item 24.2 y porcentaje de impuesto de estado CA",()=>{
        expect(getPrecioTotalPorImpuesto(23,24.2,'CA')).toEqual(602.520);
    });
    it("Precio total con impuesto para cantidad 55 precio por item 125.223 y porcentaje de impuesto de estado TX",()=>{
        expect(getPrecioTotalPorImpuesto(55,125.223,'TX')).toEqual(7317.719); 
    });
    it("Precio total con impuesto para cantidad 23 precio por item 24.2 y porcentaje de impuesto de estado  AL",()=>{        
            expect(getPrecioTotalPorImpuesto(23,24.2,'AL')).toEqual(578.864);
    });
    it("Precio total con impuesto para cantidad 23 precio por item 24.2 y porcentaje de impuesto de estado NV",()=>{
        expect(getPrecioTotalPorImpuesto(23,24.2,'NV')).toEqual(601.128);
    });
    it("Precio total con impuesto para cantidad 23 precio por item 24.2 y porcentaje de impuesto de estado UT",()=>{
        expect(getPrecioTotalPorImpuesto(23,24.2,'UT')).toEqual(593.614);
    });
    it("Precio total orden<=1000",()=>{
        expect(getPrecioTotalConDescuento(5,100,'CA')).toEqual(541.250);
    });
    it("Precio total 1000<orden<=3000 ",()=>{
            expect(getPrecioTotalConDescuento(20,100,'CA')).toEqual(2100.050);
        }); 
    it("Precio total 3000<orden<=7000 ",()=>{
        expect(getPrecioTotalConDescuento(40,100,'CA')).toEqual(4113.500);
    }); 
    it("Precio total 7000<orden<=10000 ",()=>{
        expect(getPrecioTotalConDescuento(80,100,'CA')).toEqual(8053.800);
    }); 
    it("Precio total 10000<orden<=30000 ",()=>{
        expect(getPrecioTotalConDescuento(150,100,'CA')).toEqual(14613.750);
    }); 
    function getImpuesto(estado){
        const totalizador=new Totalizador();
        totalizador.estado=estado;
        return totalizador.getImpuesto();
    }
    function getPrecioNeto(cant,precioPorItem){
       const totalizador=new Totalizador(cant,precioPorItem);
        return totalizador.getPrecioNeto();
    }
    function getPrecioTotalPorImpuesto(cant,precioPorItem,estado){
        const totalizador=new Totalizador(cant,precioPorItem,estado);
        return totalizador.getPrecioTotalPorImpuesto();
    }
    function getPrecioTotalConDescuento(cant,precioPorItem,estado){
        const totalizador=new Totalizador(cant,precioPorItem,estado);
        return totalizador.getPrecioTotalConDescuento();
    }
});
