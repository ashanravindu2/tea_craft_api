import Supplier from "./RawMaterialStock";

export default class Production{
    productionID!: number;
    stockID!: number;
    processDate!: Date | string;
    processedQuantity!: number;
}