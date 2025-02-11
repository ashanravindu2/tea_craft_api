import Supplier from "./Supplier";

export default class RawMaterialStock{
    stockID!: string;
    supplierID!: string;
    quantityInKg!: number;
    dateReceived!: Date | string;
}