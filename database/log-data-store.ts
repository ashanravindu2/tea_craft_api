import {PrismaClient} from "@prisma/client";
import Production from "../model/Production";
import Log from "../model/Log";


const prisma = new PrismaClient();

export async function addLog(log: Log) {
    try {
        const Base64 = require('js-base64').Base64;

        const decoded = Base64.decode(log.observedImage);


        return await prisma.log.create({
            data: {
                logCode: log.logCode,
                logDate: new Date(),
                observation: log.observation,
                productionID: log.productionID || null,
                supplierID: log.supplierID || null,
                employeeID: log.employeeID || null,
                observedImage: decoded || null, // Store the buffer
            },
        });
    } catch (error) {
        console.error(`Error adding Log: ${error}`);
        throw error;
    }
}


export async function deleteLog(code: string) {
    try{
        return await prisma.log.delete({
            where: {
                logCode: code
            }
        });
    }catch (error) {
        console.error(`Error deleting log: ${error}`);
        throw error;
    }
}

export async function updateLog(code: string, log: Log) {
    try{
        return await prisma.log.update({
            where: {
                logCode: code
            },
            data: {
                observation: log.observation,
                productionID: log.productionID,
                supplierID: log.supplierID,
                employeeID: log.employeeID,
                observedImage: log.observedImage

            }
        });
    }catch (error) {
        console.error(`Error updating log: ${error}`);
        throw error;
    }
}

export async function getLogs() {
    try{
        //image is stored as a buffer in the database
        //decode the buffer to base64

        return await prisma.log.findMany();

    }catch (error) {
        console.error(`Error getting logs: ${error}`);
        throw error;
    }
}

export async function getLogById(code: string) {
    try{
        return await prisma.log.findUnique({
            where: {
                logCode: code
            }
        });
    }catch (error) {
        console.error(`Error getting log by id: ${error}`);
        throw error;
    }
}



