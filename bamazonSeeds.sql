DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
id INT NOT NULL AUTO_INCREMENT,
product VARCHAR(45) NOT NULL,
department VARCHAR(45) NOT NULL,
price INT NOT NULL,
quantity INT NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO products (product, department, price, quantity)
VALUES ("shampoo", "beauty", 8, 26);

INSERT INTO products (product, department, price, quantity)
VALUES ("laptop", "electronics", 800, 5);

INSERT INTO products (product, department, price, quantity)
VALUES ("cat food", "pets", 2, 88);

INSERT INTO products (product, department, price, quantity)
VALUES ("phone charger", "electronics", 12, 12);

INSERT INTO products (product, department, price, quantity)
VALUES ("shower curtain", "home", 5, 10);

INSERT INTO products (product, department, price, quantity)
VALUES ("quilt", "home", 36, 8);

INSERT INTO products (product, department, price, quantity)
VALUES ("chef knife", "kitchen", 90, 3);

INSERT INTO products (product, department, price, quantity)
VALUES ("headset", "electronics", 120, 4);

INSERT INTO products (product, department, price, quantity)
VALUES ("yarn", "crafts", 13, 15);

INSERT INTO products (product, department, price, quantity)
VALUES ("24pack ramen", "pantry", 5, 99);