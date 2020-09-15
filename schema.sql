DROP DATABASE IF EXISTS movielist2;

-- 1. Create Database
-- 2. use that database
-- 3. Create the table
CREATE DATABASE movielist2;

USE movielist2

CREATE TABLE movies
(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(150) NOT NULL,
  watched VARCHAR(150) NOT NULL,
  PRIMARY KEY (id)
);


-- //loading schema file to db:   mysql -u root < schema.sql

INSERT INTO movies ( title, watched) VALUES
  ( 'movielist2', 'true' ),
  ( 'hello movie', 'false' ),
  ( 'babyshark', 'true' );