import { createPool } from "mysql2/promise";

export const pool = createPool({
    host: "localhost",
    user: "root",
    password: "qazwsx",
    port: 3306,
    database: "companydb"
});
