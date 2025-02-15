import {PrismaClient} from "@prisma/client";
import Production from "../model/Production";


const prisma = new PrismaClient();

export async function addProduction(production:Production) {
    try {
       return await  prisma.production.create({
            data: {
                productionID: production.productionID,
                stockID: production.stockID,
                processDate: production.processDate,
                logs: production.logs,
                processedQuantity: production.processedQuantity
            }
        });
    }catch (error) {
        console.error(`Error adding production: ${error}`);
        throw error;
    }
}

export async function deleteProduction(id: string) {
    try{
        return await prisma.production.delete({
            where: {
                productionID: id
            }
        });
    }catch (error) {
        console.error(`Error deleting production: ${error}`);
        throw error;
    }
}

export async function updateProduction(id: string, production: Production) {
    try{
        return await prisma.production.update({
            where: {
                productionID: id
            },
            data: {
                stockID:production.stockID,
                processDate: production.processDate,
                logs: production.logs,
                processedQuantity: production.processedQuantity
            }
        });
    }catch (error) {
        console.error(`Error updating production: ${error}`);
        throw error;
    }
}

export async function getProductions() {
    try{
        return await prisma.production.findMany();

    }catch (error) {
        console.error(`Error getting productions: ${error}`);
        throw error;
    }
}

export async function getProductionById(id: string) {
    try{
        return await prisma.production.findUnique({
            where: {
                productionID: id
            }
        });
    }catch (error) {
        console.error(`Error getting production by id: ${error}`);
        throw error;
    }
}


