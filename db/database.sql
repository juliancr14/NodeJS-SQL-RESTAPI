CREATE DATABASE IF NOT EXISTS companydb;

/* Usar la base de datos */
USE companydb;

/* Crear tabla empleados */
CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY(id)
);

/* Ver la tabla empleados */
DESCRIBE employee;