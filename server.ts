import express from "express";
import supplierRoutes from "./routes/supplier-routes";
import employeeRoutes from "./routes/employee-routes";
import rawMaterialStockRoutes from "./routes/rawMaterialStock-routes";
import productionRoutes from "./routes/production-routes";

import userAdminRoutes, {authenticateToken} from "./routes/userAdmin-routes";
import dotenv from "dotenv";
import cors from "cors";
import Supplier from "./model/Supplier";
import logRoutes from "./routes/log-routes";

const app = express();



app.use(express.json());// })

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));

console.log("Loaded SECRET_KEY:", process.env.SECRET_KEY);

dotenv.config();


app.use('/auth', userAdminRoutes);
app.use(authenticateToken);

app.use('/supplier',authenticateToken,supplierRoutes)

app.use('/employee',authenticateToken,employeeRoutes)

app.use('/rawMaterial',authenticateToken,rawMaterialStockRoutes)

app.use('/production',authenticateToken,productionRoutes)

app.use('/log',authenticateToken,logRoutes)



app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});