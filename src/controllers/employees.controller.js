import { pool } from "../db.js";

//Get all employees from database
export const getEmployees = async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM employee");
    res.json(rows);
}

//Get an specific employee from database
export const getEmployee = async (req, res) => {
    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [req.params.id]);

    if (rows.length <= 0) return res.status(404).json({
        message: "Employee not found"
    });

    res.json(rows[0]);
}

//Add an employee to database
export const postEmployee = async (req, res) => {
    //Obtain data from request
    const { name, salary } = req.body;

    const [rows] = await pool.query(`INSERT INTO employee(name, salary) VALUES (?, ?)`, [name, salary]);
    res.send({
        id: rows.insertId,
        name,
        salary
    })
}

export const putEmployee = (req, res) => {

};

export const deleteEmployee = async (req, res) => {
    const [rows] = await pool.query("DELETE FROM employee WHERE id = ?", [req.params.id]);
    
    if (rows.affectedRows <= 0) return res.status(404).json({
        message: "Employer not found"
    });

    res.sendStatus(204);
}
