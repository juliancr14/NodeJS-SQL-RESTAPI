import express from "express";

const app = express();

app.get("/employees", (req, res) => res.send("Mostrando empleados"));

app.post("/employees", (req, res) => res.send("Enviando empleado"));

app.put("/employees", (req, res) => res.send("Actulizando empleado"));

app.delete("/employees", (req, res) => res.send("Eliminando empleado"));

app.listen(3000);
console.log("Server on port 3000");
