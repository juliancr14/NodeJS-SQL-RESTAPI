import express from "express";
import { pool } from "./db.js";

const app = express();

//Endpoints
app.get("/ping", async (req, res) => {
    const [result] = await pool.query(`SELECT "Pong" AS result`);
    res.json(result[0]);
});

app.get("/employees", (req, res) => res.send("Mostrando empleados"));

app.post("/employees", (req, res) => res.send("Enviando empleado"));

app.put("/employees", (req, res) => res.send("Actulizando empleado"));

app.delete("/employees", (req, res) => res.send("Eliminando empleado"));

//Server config
app.listen(3000);
console.log("Server on port 3000");
