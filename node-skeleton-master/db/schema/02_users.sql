-- Drop and recreate Users table
DROP TABLE IF EXISTS users CASCADE;
--users databases the core of the users data storage, including organization_id to reference the organizations table and timestamp (created_at) to track user creation time

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  master_password  VARCHAR(255) NOT NULL,
  organisation_id INTEGER REFERENCES organisations(id) ON DELETE CASCADE,
  created_at TIMESTAMP
);
