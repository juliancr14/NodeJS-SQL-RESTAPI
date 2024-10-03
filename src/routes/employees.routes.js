import { Router } from "express";

const router = Router();

//Router endpoints
router.get("/employees", (req, res) => res.send("Mostrando empleados"));

router.post("/employees", (req, res) => res.send("Agregando empleado"));

router.put("/employees", (req, res) => res.send("Actualizando empleado"));

router.delete("/employees", (req, res) => res.send("Eliminando empleado"));

//Export endpoints
export default router;