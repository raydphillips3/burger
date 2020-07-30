DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (

    id INT AUTO_INCREMENT,
    burger_name VARCHAR(25),
    devoured BOOLEAN NOT NULL DEFAULT FALSE,
    PRIMARY KEY (id)
    
);