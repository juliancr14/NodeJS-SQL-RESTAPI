import { pool } from "../db.js";

export const getEmployee = async (req, res) => {
    const [result] = await pool.query("SELECT * FROM employee");
    res.json(result);
};

export const postEmployee = async (req, res) => {
    const { name, salary } = req.body;

    const [rows] = await pool.query(`INSERT INTO employee (name, salary) VALUES (?, ?)`, [name, salary]);
    res.send({ rows })
};

export const putEmployee = (req, res) => res.send("Actualizando empleado");

export const deleteEmployee = (req, res) => res.send("Eliminando empleado");
