// import express from "express";
// import {addProduct, deleteProduct, getProducts, updateProduct} from "../database/product-data-store";
// import Product from "../model/Product";
//
//
// const router = express.Router();
//
// router.post("/add", async (req, res) => {
//     const product = req.body;
//     try {
//         const addedProduct = await addProduct(product);
//         res.status(201).json(product);
//     } catch (error) {
//         console.error(`Error adding product: ${error}`);
//         res.status(500).send("Error adding product");
//     }
// });
//
// router.delete("/remove/:productID", async (req, res) => {
//     const productID: string = req.params.productID;
//     try {
//          const deletedProduct = await deleteProduct(productID);
//          res.status(200).json(deletedProduct);
//     } catch (e) {
//         console.error(`Error deleting product: ${e}`);
//         res.status(500).send("Error deleting product");
//     }
// });
//
// router.put("/update/:productID", async (req, res) => {
//     const productID: string = req.params.productID;
//     const product :Product = req.body as Product;
//     try {
//         const updatedProduct = await updateProduct(productID, product);
//         res.status(200).json(updatedProduct);
//     } catch (e) {
//         console.error(`Error updating product: ${e}`);
//         res.status(500).send("Error updating product");
//     }
// });
//
// router.get("/all", async (req, res) => {
//     try {
//         const products = await getProducts();
//         res.status(200).json(products);
//     } catch (e) {
//         console.error(`Error getting products: ${e}`);
//         res.status(500).send("Error getting products");
//     }
// });
//
// export default router;