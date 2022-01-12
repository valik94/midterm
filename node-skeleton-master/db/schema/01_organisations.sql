-- Drop and recreate Organizations table
DROP TABLE IF EXISTS organisations CASCADE;

--basic organizations table to organize by id and name of organization

CREATE TABLE organisations (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);
