CREATE TABLE todo(
    id SERIAL PRIMARY  KEY,
    title VARCHAR(100),
    description VARCHAR(250)
);

INSERT INTO todo(title,description) VALUES("");


CREATE TABLE products(
    id SERIAL PRIMARY  KEY,
    name VARCHAR(250),
    price INTEGER
);