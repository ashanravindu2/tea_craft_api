import express from "express";
import Supplier from "../model/Supplier";
import {addSupplier, deleteSupplier, getSuppliers, updateSupplier} from "../database/supplier-data-store";
import {authenticateToken} from "./userAdmin-routes";

const router = express.Router();

router.post("/add", async (req, res) => {
   const supplier:Supplier = req.body as Supplier;
   try {
       const addedSupplier = await addSupplier(supplier);
       res.status(201).json(addedSupplier);
   }catch (error) {
       console.log(`Error adding supplier: ${error}`);
       res.status(500).send("Error adding supplier");
   }
});

router.delete("/remove/:supplierID", async (req, res) => {
   const supplierID: string = req.params.supplierID;
   try{
         const deletedSupplier = await deleteSupplier(supplierID);
         res.status(200).json(deletedSupplier);
   }catch (e) {
       console.log(`Error deleting supplier: ${e}`);
       res.status(500).send("Error deleting supplier");
   }
});

router.put("/update/:supplierID", async (req, res) => {
    const supplierID: string = req.params.supplierID;
    const supplier: Supplier = req.body as Supplier;
    try {
         const updatedSupplier = await updateSupplier(supplierID, supplier);
         res.status(200).json(updatedSupplier);
    } catch (e) {
         console.log(`Error updating supplier: ${e}`);
         res.status(500).send("Error updating supplier");
    }
});

router.get("/all", async (req, res) => {
    try {
        const suppliers = await getSuppliers();
        res.status(200).json(suppliers);
    } catch (e) {
        console.log(`Error getting suppliers: ${e}`);
        res.status(500).send("Error getting suppliers");
    }
});

export default router;
// The supplier-routes.ts file exports an Express router object that defines the following routes for suppliers:

// POST /add: Adds a supplier
// DELETE /remove/:email: Deletes a supplier by email
// PUT /update/:id: Updates a supplier by ID
// GET /all: Retrieves all suppliers
// The route handlers for these routes are simple and return a 200 OK status with a message. In a real application, you would replace these with actual database operations.

// Step 3: Create the Supplier Data Store
// The supplier data store is a module that interacts with the database to perform CRUD operations on supplier data. In this step, you'll create a new file named supplier-data-store.ts in the database directory and implement the addSupplier, deleteSupplier, updateSupplier, and getSuppliers functions.

// Create a new file named supplier-data-store.ts in the database directory.
// Add the following code to the supplier-data-store.ts file: