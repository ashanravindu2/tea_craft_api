
import RawMaterialStock from "../model/RawMaterialStock";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();


export async function addRawMaterialStock(rawMaterialStock:RawMaterialStock) {
    try {
        return await prisma.rawmaterialstock.create({
            data: {
                stockID:rawMaterialStock.stockID,
                supplierID:rawMaterialStock.supplierID,
                quantityInKg:rawMaterialStock.quantityInKg,
                dateReceived:new Date(),
            }
        });
    } catch (error) {
        console.error(`Error adding rawMaterialStock: ${error}`);
        throw error;
    }
}

export async function deleteRawMaterialStock(id: string) {
    try{
        return await prisma.rawmaterialstock.delete({
            where : {
               stockID: id
            }
        });
    } catch (error){
        console.error(`Error deleting rawMaterialStock: ${error}`);
        throw error;
    }
}

export async function updateRawMaterialStock(id: string, rawMaterialStock: RawMaterialStock) {
    try {
        return await prisma.rawmaterialstock.update({
            where: {
                stockID: id
            },
            data: {
                supplierID: rawMaterialStock.supplierID,
                quantityInKg: rawMaterialStock.quantityInKg,
                dateReceived: new Date(),
            }
        });
    }catch (error){
        console.error(`Error updating rawMaterialStock: ${error}`);
        throw error;
    }
}

export async function getRawMaterialStocks() {
    try {
        return await prisma.rawmaterialstock.findMany();
    } catch (error) {
        console.error(`Error getting rawMaterialStocks: ${error}`);
        throw error;
    }
}

export async function getRawMaterialStockById(id: string) {
    try {
        return await prisma.rawmaterialstock.findUnique({
            where: {
                stockID: id
            }
        });
    } catch (error) {
        console.error(`Error getting rawMaterialStock: ${error}`);
        throw error;
    }
}