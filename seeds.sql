INSERT INTO department (name)
VALUES ("Science");

INSERT INTO role (title, salary, department_id)
VALUES ("manager", 30000, 1);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Petar", "Vidovic", 1, null);