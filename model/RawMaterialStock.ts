import Supplier from "./Supplier";

export default class RawMaterialStock{
    stockID!: number;
    supplierID!: string;
    quantityInKg!: number;
    dateReceived!: Date | string;
}