import {Totalizador} from "./totalizador";
describe("Totalizador de ventas",()=>{
    it("Impuesto para el estado CA",()=>{
        const totalizador=new Totalizador();
        totalizador.estado="CA";
        expect(totalizador.getImpuesto()).toEqual(8.25);
    });

    it("Impuesto para el estado NV",()=>{
        const totalizador=new Totalizador();
        totalizador.estado="NV";
        expect(totalizador.getImpuesto()).toEqual(8);
    });

    it("Impuesto para el estado TX",()=>{
        const totalizador=new Totalizador();
        totalizador.estado="TX";
        expect(totalizador.getImpuesto()).toEqual(6.25);
    });
    it("Impuesto para el estado AL",()=>{
        const totalizador=new Totalizador();
        totalizador.estado="AL";
        expect(totalizador.getImpuesto()).toEqual(4);
    });

    it("Impuesto para el estado UT",()=>{
        const totalizador=new Totalizador();
        totalizador.estado="UT";
        expect(totalizador.getImpuesto()).toEqual(6.65);
    });

    it("Precio neto para cantidad 5 precio por item 20",()=>{
        const totalizador=new Totalizador(5,20);
        expect(totalizador.getPrecioNeto()).toEqual(100);
    });

    it("Precio neto para cantidad 23 precio por item 24.2",()=>{
        const totalizador=new Totalizador(23,24.2);
        expect(totalizador.getPrecioNeto()).toEqual(556.6);
    });
    it("Precio total con impuesto para cantidad 23 precio por item 24.2 y porcentaje de impuesto de estado CA",()=>{
        const totalizador=new Totalizador(23,24.2,'CA');
        expect(totalizador.getPrecioTotalPorImpuesto()).toEqual(602.519);
    });
    it("Precio total con impuesto para cantidad 55 precio por item 125.223 y porcentaje de impuesto de estado TX",()=>{
        const totalizador=new Totalizador(55,125.223,'TX');
        expect(totalizador.getPrecioTotalPorImpuesto()).toEqual(7317.719); 
    });
    it("Precio total con impuesto para cantidad 23 precio por item 24.2 y porcentaje de impuesto de estado  AL",()=>{        
            const totalizador=new Totalizador(23,24.2,'AL');
            expect(totalizador.getPrecioTotalPorImpuesto()).toEqual(578.864);
    });
    it("Precio total con impuesto para cantidad 23 precio por item 24.2 y porcentaje de impuesto de estado NV",()=>{
        const totalizador=new Totalizador(23,24.2,'NV');
        expect(totalizador.getPrecioTotalPorImpuesto()).toEqual(601.128);
    });
    it("Precio total con impuesto para cantidad 23 precio por item 24.2 y porcentaje de impuesto de estado UT",()=>{
        const totalizador=new Totalizador(23,24.2,'UT');
        expect(totalizador.getPrecioTotalPorImpuesto()).toEqual(593.614);
    });
    it("Precio total orden<=1000",()=>{
        const totalizador=new Totalizador(5,100,'CA');
        expect(totalizador.getPrecioTotalConDescuento()).toEqual(525.012);
    });
    it("Precio total 1000<orden<=3000 ",()=>{
        const totalizador=new Totalizador(20,100,'CA');
        expect(totalizador.getPrecioTotalConDescuento()).toEqual(2056.75);
    }); 
    it("Precio total 3000<orden<=7000 ",()=>{
        const totalizador=new Totalizador(40,100,'CA');
        expect(totalizador.getPrecioTotalConDescuento()).toEqual(4026.9);
    }); 
    it("Precio total 7000<orden<=10000 ",()=>{
        const totalizador=new Totalizador(80,100,'CA');
        expect(totalizador.getPrecioTotalConDescuento()).toEqual(7794);
    }); 
    it("Precio total 10000<orden<=30000 ",()=>{
        const totalizador=new Totalizador(150,100,'CA');
        expect(totalizador.getPrecioTotalConDescuento()).toEqual(13801.875);
    }); 
});
