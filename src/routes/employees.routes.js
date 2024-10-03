import { Router } from "express";
import { getEmployees, getEmployee, postEmployee, patchEmployee, deleteEmployee} from "../controllers/employees.controller.js";

const router = Router();

//Router endpoints
router.get("/employees", getEmployees);

router.get("/employees/:id", getEmployee);

router.post("/employees", postEmployee);

router.patch("/employees/:id", patchEmployee);

router.delete("/employees/:id", deleteEmployee);

//Export endpoints
export default router;
