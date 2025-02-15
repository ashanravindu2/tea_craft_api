import express from "express";
import supplierRoutes from "./routes/supplier-routes";
import employeeRoutes from "./routes/employee-routes";
import rawMaterialStockRoutes from "./routes/rawMaterialStock-routes";
import productionRoutes from "./routes/production-routes";
import productRoutes from "./routes/product-routes";
import userAdminRoutes, {authenticateToken} from "./routes/userAdmin-routes";
import dotenv from "dotenv";
import cors from "cors";
import Supplier from "./model/Supplier";

const app = express();


// app.use('/',(req,res,next)=>{
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type');
//
//     next();
app.use(express.json());// })

app.use(cors({
    origin: "http://localhost:5173", // ✅ Allow requests from frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // ✅ Allow common methods
    credentials: true // ✅ Allow cookies & authorization headers
}));


console.log("Loaded SECRET_KEY:", process.env.SECRET_KEY);

dotenv.config();


// app.use('/auth', userAdminRoutes);
// app.use(authenticateToken);
//
// app.post('/supplier', authenticateToken ,(req: express.Request, res: express.Response) => {
//     const supplier:Supplier = req.body
//     const email = req.body.email;
//     console.log(email  );
//     res.json(supplier);
//
//
// })
app.use('/supplier', supplierRoutes);
app.use('/employee',employeeRoutes)

app.use('/rawMaterial',rawMaterialStockRoutes)

app.use('/production',productionRoutes)

app.use('/product',productRoutes)



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});