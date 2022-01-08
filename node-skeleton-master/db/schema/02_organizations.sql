-- Drop and recreate Organizations table
DROP TABLE IF EXISTS organizations CASCADE;

CREATE TABLE organizations (
  id SERIAL PRIMARY KEY NOT NULL,
  org_name VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  website VARCHAR(255) NOT NULL,
  user_id INTEGER REFERENCES Users(id) ON DELETE CASCADE,
  type INTEGER
);
