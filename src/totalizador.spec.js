import { getImpuesto, getPrecioNeto,getPrecioTotalPorImpuesto } from "./totalizador";
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

    it("Impuesto para el estado TX",()=>{
        expect(getImpuesto("CA")).toEqual(8.25);
    });

    it("Precio neto para cantidad 5 precio por item 20",()=>{
        expect(getPrecioNeto(5, 20)).toEqual(100);
    });

    it("Precio neto para cantidad 23 precio por item 24.2",()=>{
        expect(getPrecioNeto(23, 24.2)).toEqual(556.6);
    });
    it("Precio total con impuesto para cantidad 23 precio por item 24.2 y porcentaje de impuesto de estado CA",()=>{
        expect(getPrecioTotalPorImpuesto(23,24.2,'CA')).toEqual(602.5195);
    });
    it("Precio total con impuesto para cantidad 55 precio por item 125.223 y porcentaje de impuesto de estado TX",()=>{
        expect(getPrecioTotalPorImpuesto(55,125.223,'TX')).toEqual(7317.7190625); 
    });
    
});
