import express from "express";
import Production from "../model/Production";
import {addProduction, deleteProduction, getProductions, updateProduction} from "../database/production-data-store";

const router = express.Router();

router.post("/add", async (req, res) => {
    const production : Production = req.body as Production;
    try{
        const addedProduction = await addProduction(production);
        res.status(201).json(addedProduction);
    }catch (error) {
        console.log(`Error adding production: ${error}`);
        res.status(500).send("Error adding production");
    }
});

router.delete("/remove/:productionID", async (req, res) => {
    const productionID: string = req.params.productionID;
    try{
        const deletedProduction = await deleteProduction(productionID);
        res.status(200).json(deletedProduction);
    }catch (error) {
        console.log(`Error deleting production: ${error}`);
        res.status(500).send("Error deleting production");
    }
});

router.put("/update/:productionID", async (req, res) => {
    const productionID: string = req.params.productionID;
    const production: Production = req.body as Production;
    try{
        const updatedProduction = await updateProduction(productionID, production);
        res.status(200).json(updatedProduction);
    }catch (error) {
        console.log(`Error updating production: ${error}`);
        res.status(500).send("Error updating production");
    }
});

router.get("/all", async (req, res) => {
    try{
        const productions = await getProductions();
        res.status(200).json(productions);
    }catch (error) {
        console.log(`Error getting productions: ${error}`);
        res.status(500).send("Error getting productions");
    }
});

export default router;

