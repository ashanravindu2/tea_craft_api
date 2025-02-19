import express from "express";
import RawMaterialStock from "../model/RawMaterialStock";
import {
    addRawMaterialStock,
    deleteRawMaterialStock, getRawMaterialStocks,
    updateRawMaterialStock
} from "../database/rawMaterialStock-data-store";




const router = express.Router();

router.post("/add",async (req, res) => {
    const rawMaterialStock:RawMaterialStock = req.body as RawMaterialStock;
    try {
        const addedRawMaterialStock = await addRawMaterialStock(rawMaterialStock);
        res.status(201).json(rawMaterialStock);
    } catch (error) {
        console.log(`Error adding rawMaterialStock: ${error}`);
        res.status(500).send("Error adding rawMaterialStock");
    }
});

router.delete("/remove/:stockID", async (req, res) => {
    const rawMaterialStockID: string = req.params.stockID;
    try {
        const deletedMaterial = await deleteRawMaterialStock(rawMaterialStockID);
        res.status(200).json(deletedMaterial);
    } catch (e) {
        console.log(`Error deleting Material: ${e}`);
        res.status(500).send("Error deleting Material");
    }
});

router.put("/update/:stockID", async (req, res) => {
    const rawMaterialStockID: string = req.params.stockID;
    const rawMaterialStock: RawMaterialStock = req.body as RawMaterialStock;
    try {
        const updatedMaterial = await updateRawMaterialStock(rawMaterialStockID, rawMaterialStock);
        res.status(200).json(updatedMaterial);
    } catch (e) {
        console.log(`Error updating Material: ${e}`);
        res.status(500).send("Error updating Material");
    }
});

router.get("/all", async ( req, res) => {
    try {
        const rawMaterialStocks = await getRawMaterialStocks();
        res.status(200).json(rawMaterialStocks);
    } catch (e) {
        console.log(`Error getting rawMaterialStocks: ${e}`);
        res.status(500).send("Error getting rawMaterialStocks");
    }
});

// router.get("/getStock/:dateReceived", async (req, res) => {
//     const date: string = req.params.dateReceived;
//     try{
//         const stocks = await getStockQtyFilterDate(date);
//         res.status(200).json(stocks);
//     }catch (error) {
//         console.log(`Error getting process stock: ${error}`);
//         res.status(500).send("Error getting process stock");
//     }
// })


export default router;