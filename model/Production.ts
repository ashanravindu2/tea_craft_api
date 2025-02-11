import Supplier from "./RawMaterialStock";

export default class Production{
    productionID!: string;
    stockID!: string;
    processDate!: Date | string;
    processedQuantity!: number;
}