
import RawMaterialStock from "../model/RawMaterialStock";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();


export async function addRawMaterialStock(rawMaterialStock:RawMaterialStock) {
    try {
        return await prisma.rawMaterialStock.create({
            data: {
                stockID:rawMaterialStock.stockID,
                supplierID:rawMaterialStock.supplierID,
                quantityInKg:rawMaterialStock.quantityInKg,
                dateReceived:rawMaterialStock.dateReceived
            }
        });
    } catch (error) {
        console.error(`Error adding rawMaterialStock: ${error}`);
        throw error;
    }
}

export async function deleteRawMaterialStock(id: any) {
    try{
        return await prisma.rawMaterialStock.delete({
            where : {
               stockID: id
            }
        });
    } catch (error){
        console.error(`Error deleting rawMaterialStock: ${error}`);
        throw error;
    }
}

export async function updateRawMaterialStock(id: any, rawMaterialStock: RawMaterialStock) {
    try {
        return await prisma.rawMaterialStock.update({
            where: {
                stockID: id
            },
            data: {
                supplierID: rawMaterialStock.supplierID,
                quantityInKg: rawMaterialStock.quantityInKg,
                dateReceived: rawMaterialStock.dateReceived
            }
        });
    }catch (error){
        console.error(`Error updating rawMaterialStock: ${error}`);
        throw error;
    }
}

export async function getRawMaterialStocks() {
    try {
        return await prisma.rawMaterialStock.findMany();
    } catch (error) {
        console.error(`Error getting rawMaterialStocks: ${error}`);
        throw error;
    }
}

export async function getRawMaterialStockById(id: any) {
    try {
        return await prisma.rawMaterialStock.findUnique({
            where: {
                stockID: id
            }
        });
    } catch (error) {
        console.error(`Error getting rawMaterialStock: ${error}`);
        throw error;
    }
}