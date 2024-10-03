import { Router } from "express";
import { getEmployees, getEmployee, postEmployee, patchEmployee, deleteEmployee} from "../controllers/employees.controller.js";

const router = Router();

//Router endpoints
//Get all data from database
router.get("/employees", getEmployees);

//Get an specific data from database
router.get("/employees/:id", getEmployee);

//Add new data to database
router.post("/employees", postEmployee);

//Update an specific data from database
router.patch("/employees/:id", patchEmployee);

//Delete an specific data from database
router.delete("/employees/:id", deleteEmployee);

//Export endpoints
export default router;
