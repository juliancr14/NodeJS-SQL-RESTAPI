import { Router } from "express";
import { getEmployee, postEmployee, putEmployee, deleteEmployee} from "../controllers/employees.controller.js";

const router = Router();

//Router endpoints
router.get("/employees", getEmployee);

router.post("/employees", postEmployee);

router.put("/employees", putEmployee);

router.delete("/employees", deleteEmployee);

//Export endpoints
export default router;
