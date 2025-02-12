import express from "express";
import supplierRoutes from "./routes/supplier-routes";
import employeeRoutes from "./routes/employee-routes";
import rawMaterialStockRoutes from "./routes/rawMaterialStock-routes";
import productionRoutes from "./routes/production-routes";
import productRoutes from "./routes/product-routes";
import userAdminRoutes from "./routes/userAdmin-routes";


const app = express();

app.use('/',(req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type');

    next();
})

app.use(express.json());

app.use('/supplier',supplierRoutes)

app.use('/employee',employeeRoutes)

app.use('/rawMaterial',rawMaterialStockRoutes)

app.use('/production',productionRoutes)

app.use('/product',productRoutes)

app.use('/user',userAdminRoutes)



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});