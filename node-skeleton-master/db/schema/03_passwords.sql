-- Drop and recreate Organizations table
DROP TABLE IF EXISTS passwords_storage CASCADE;

CREATE TABLE passwords_storage (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  recovery_email VARCHAR(255) NOT NULL,
);
