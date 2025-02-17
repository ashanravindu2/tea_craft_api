import Supplier from "./RawMaterialStock";

export default class Production{
    productionID!: string;
    qualityChecks!: boolean;
    processDate!: Date | string;
    logs!: string;
    processedQuantity!: number;
}