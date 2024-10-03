import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

//Middleware
app.use(express.json());

//Using endpoints routes
app.use(indexRoutes);
app.use("/api", employeesRoutes);

//Server config
app.listen(3000);
console.log("Server on port 3000");
