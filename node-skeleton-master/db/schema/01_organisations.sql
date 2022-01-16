-- Drop and recreate organisations table
DROP TABLE IF EXISTS organisations CASCADE;

--organisations database - is very straight forward stores unique org id and name

CREATE TABLE organisations (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);
