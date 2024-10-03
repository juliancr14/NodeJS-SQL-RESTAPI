CREATE DATABASE IF NOT EXISTS companydb;

/* Use the database */
USE companydb;

/* Create employees table */
CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY(id)
);

/* To see table employee */
DESCRIBE employee;

/* Insert data into employees table */
INSERT INTO employee VALUES 
    (1, "Nati", 1000),
    (2, "Julian", 2000),
    (3, "Joe", 1500),
    (4, "Sam", 3000),
    (5, "Henry", 2500);

/* Show all data from employee */
SELECT * FROM employee;

/* Show data from an employee with an especific id */
SELECT * FROM employee WHERE id = 1;

/* Delete an employee with an specific id */
DELETE FROM employee WHERE id = 1;

/* Update an employee with an specific id */
UPDATE employee SET name = newName, salary = 10000 WHERE id = 1;