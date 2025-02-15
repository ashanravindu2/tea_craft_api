import Supplier from "./RawMaterialStock";

export default class Production{
    productionID!: string;
    stockID!: string;
    processDate!: Date | string;
    logs!: string;
    processedQuantity!: number;
}