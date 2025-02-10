import express from "express";
import supplierRoutes from "./routes/supplier-routes";
import employeeRoutes from "./routes/employee-routes";


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

app.listen(5173, () => {
    console.log('Server is running on http://localhost:5173');
});