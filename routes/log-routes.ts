import express from "express";
import Production from "../model/Production";
import {
    addProduction,
    deleteProduction,
    getProductions,
    updateProduction
} from "../database/production-data-store";
import Log from "../model/Log";
import {addLog, deleteLog, getLogs, updateLog} from "../database/log-data-store";

const router = express.Router();

router.post("/add", async (req, res) => {
    const log : Log = req.body as Log;
    try{
        const addedLog = await addLog(log);
        res.status(201).json(addedLog);
    }catch (error) {
        console.log(`Error adding log: ${error}`);
        res.status(500).send("Error adding log");
    }
});

router.delete("/remove/:logCode", async (req, res) => {
    const logCode: string = req.params.logCode;
    try{
        const deletedLog = await deleteLog(logCode);
        res.status(200).json(deletedLog);
    }catch (error) {
        console.log(`Error deleting log: ${error}`);
        res.status(500).send("Error deleting log");
    }
});

router.put("/update/:logCode", async (req, res) => {
    const logCode: string = req.params.logCode;
    const log: Log = req.body as Log;
    try{
        const updatedLog = await updateLog(logCode, log);
        res.status(200).json(updatedLog);
    }catch (error) {
        console.log(`Error updating log: ${error}`);
        res.status(500).send("Error updating log");
    }
});

router.get("/all", async (req, res) => {
    try{
        const log = await getLogs();
        res.status(200).json(log);
    }catch (error) {
        console.log(`Error getting logs: ${error}`);
        res.status(500).send("Error getting logs");
    }
});




export default router;

